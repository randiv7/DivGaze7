// Logic for fish behavior and movement
import { Fish, CursorState, TailSegment } from './types';

// Fixed fish size as specified in requirements (50-60px width)
const FISH_SIZE = 55;
// Edge boundary buffer to prevent sticking
const EDGE_BUFFER = 5;
// More tail segments for greater fluidity and longer tail
const TAIL_SEGMENT_COUNT = 10; // Increased from 8 to create longer tail

/**
 * Creates a new fish object
 */
export function createFish(id: number, tankWidth: number, tankHeight: number): Fish {
  return {
    id,
    x: Math.random() * (tankWidth - 2 * EDGE_BUFFER) + EDGE_BUFFER,
    y: Math.random() * (tankHeight - 2 * EDGE_BUFFER) + EDGE_BUFFER,
    size: FISH_SIZE, // Fixed fish size as specified
    speed: 0.8 + Math.random() * 0.4,
    maxSpeed: 2 + Math.random() * 0.5,
    normalSpeed: 0.8 + Math.random() * 0.4,
    angle: Math.random() * Math.PI * 2,
    targetAngle: Math.random() * Math.PI * 2,
    turnSpeed: 0.03 + Math.random() * 0.02,
    tailSegments: Array.from({ length: TAIL_SEGMENT_COUNT }, (_, i) => ({ 
      x: 0, y: 0, angle: 0,
      // Add flexibility values for more dynamic tail movement
      // More flexibility toward the end of the tail
      flexibility: 0.5 + (i / TAIL_SEGMENT_COUNT) * 0.7 // Increased flexibility for longer tail
    } as TailSegment)),
    wobbleOffset: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.05 + Math.random() * 0.03, // Speed of tail wobble
    wobbleIntensity: 1.0 + Math.random() * 0.5, // Increased intensity for more visible tail movement
    state: 'swimming',
    stateTime: 0,
    inspectDuration: 1000 + Math.random() * 2000,
    inspectRadius: 20 + id * 10,
    orbitOffset: id * (Math.PI * 2 / 3),
    acceleration: 0.05,
  };
}

/**
 * Initialize multiple fish
 */
export function initFishes(count: number, tankWidth: number, tankHeight: number): Fish[] {
  return Array.from({ length: count }, (_, i) => createFish(i, tankWidth, tankHeight));
}

/**
 * Calculate distance between two points
 */
export function getDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Updates the fish tail segments for fluid motion
 * Adapted for longer tail and smaller body
 */
export function updateFishTail(fish: Fish): void {
  // Update wobble effect for the tail
  fish.wobbleOffset += fish.wobbleSpeed;
  
  // Calculate speed factor - faster fish have more tail movement
  const speedFactor = fish.speed / fish.normalSpeed;
  
  // Different wobble characteristics based on fish state
  const stateWobbleMultiplier = fish.state === 'chasing' ? 1.3 : 
                              fish.state === 'inspecting' ? 0.8 : 1.0;
  
  // Calculate lag factor - increased for longer tail
  const lagFactor = 0.25; // Increased from 0.2 for better length effect
  
  // Head position
  const headX = fish.x;
  const headY = fish.y;
  
  // Previous position tracking
  let prevX = headX;
  let prevY = headY;
  let prevAngle = fish.angle;
  
  // Update each tail segment
  fish.tailSegments.forEach((segment, i) => {
    // Calculate segment position based on fish motion
    const segmentIndex = i + 1;
    const totalSegments = fish.tailSegments.length;
    
    // Calculate lag - increases toward the end of the tail
    const lagAmount = lagFactor * (segmentIndex / totalSegments) * speedFactor;
    
    // Dynamic distance based on speed and segment position
    // Longer segment distances for longer tail
    const segmentDistance = fish.size * 0.12 * (1 + lagAmount); // Increased from 0.1 to 0.12
    
    // Wobble increases toward tail end
    const wobbleAmplitude = fish.wobbleIntensity * (segmentIndex / totalSegments) * stateWobbleMultiplier;
    const wobbleFrequency = 1 + segmentIndex * 0.25; // Adjusted for longer tail
    
    // Calculate wobble amount with sine wave
    const wobblePhase = fish.wobbleOffset * wobbleFrequency + segmentIndex * 0.5;
    const wobbleAmount = wobbleAmplitude * Math.sin(wobblePhase);
    
    // Apply perpendicular wobble to create fluid motion
    const wobbleX = Math.sin(prevAngle) * wobbleAmount;
    const wobbleY = -Math.cos(prevAngle) * wobbleAmount;
    
    // Position behind previous point with lag effect
    segment.x = prevX - Math.cos(prevAngle) * segmentDistance + wobbleX;
    segment.y = prevY - Math.sin(prevAngle) * segmentDistance + wobbleY;
    
    // Calculate angle with smooth transition
    const angleToHead = Math.atan2(headY - segment.y, headX - segment.x);
    const segmentFraction = segmentIndex / totalSegments;
    
    // Blend between direct angle to head and previous segment angle for smoother curve
    // For longer tails, we want more influence from the previous segment
    const blendFactor = Math.min(1, segmentFraction * 2.2); // Increased factor for more fluid motion
    segment.angle = angleToHead * (1 - blendFactor) + prevAngle * blendFactor;
    
    // Update previous positions for next segment
    prevX = segment.x;
    prevY = segment.y;
    prevAngle = segment.angle;
  });
}

/**
 * Update fish position and behavior based on state
 */
export function updateFish(
  fish: Fish, 
  tankWidth: number, 
  tankHeight: number, 
  cursor: CursorState, 
  isMobile: boolean, 
  deltaTime: number
): void {
  const now = Date.now();
  const timeSinceCursorMoved = now - cursor.lastMoved;
  
  // Update state time
  fish.stateTime += deltaTime;
  
  // Handle different states
  if (isMobile) {
    // On mobile, always free swim
    fish.state = 'swimming';
  } else if (cursor.x === null || !cursor.isActive) {
    // No cursor or cursor not in canvas, free swim
    fish.state = 'swimming';
  } else if (fish.state === 'swimming') {
    // If cursor is active and we're swimming, start chasing
    if (cursor.isActive && timeSinceCursorMoved < 100) {
      fish.state = 'chasing';
      fish.stateTime = 0;
    }
  } else if (fish.state === 'chasing') {
    // If cursor hasn't moved for a while, start inspecting
    if (timeSinceCursorMoved > 1000) {
      fish.state = 'inspecting';
      fish.stateTime = 0;
    }
  } else if (fish.state === 'inspecting') {
    // After inspection period, go back to swimming
    if (fish.stateTime > fish.inspectDuration) {
      fish.state = 'swimming';
      fish.stateTime = 0;
    }
    
    // If cursor moves significantly while inspecting, go back to chasing
    if (timeSinceCursorMoved < 100) {
      fish.state = 'chasing';
      fish.stateTime = 0;
    }
  }
  
  // Handle behavior based on state
  if (fish.state === 'swimming') {
    // Free swimming behavior
    // Occasionally change direction
    if (Math.random() < 0.005) {
      fish.targetAngle = Math.random() * Math.PI * 2;
    }
    
    // Gradually return to normal speed
    fish.speed = fish.speed + (fish.normalSpeed - fish.speed) * fish.acceleration;
    
    // Add some natural wobble to the swimming motion
    if (Math.random() < 0.02) {
      // Small random direction adjustments
      fish.targetAngle += (Math.random() - 0.5) * 0.2;
    }
  } else if (fish.state === 'chasing' && cursor.x !== null) {
    // Chase cursor behavior
    const dx = cursor.x - fish.x;
    const dy = cursor.y - fish.y;
    fish.targetAngle = Math.atan2(dy, dx);
    
    // Gradually increase to max speed
    fish.speed = fish.speed + (fish.maxSpeed - fish.speed) * fish.acceleration;
  } else if (fish.state === 'inspecting' && cursor.x !== null) {
    // Circle around cursor behavior
    const inspectTime = fish.stateTime / 1000; // convert to seconds
    const angle = inspectTime * 2 + fish.orbitOffset;
    
    // Calculate position in orbit around cursor
    const targetX = cursor.x + Math.cos(angle) * fish.inspectRadius;
    const targetY = cursor.y + Math.sin(angle) * fish.inspectRadius;
    
    // Get angle to orbit position
    const dx = targetX - fish.x;
    const dy = targetY - fish.y;
    fish.targetAngle = Math.atan2(dy, dx);
    
    // Adjust speed based on distance to target orbit position
    const distToOrbitPos = getDistance(fish.x, fish.y, targetX, targetY);
    const orbitSpeed = 0.5 + (distToOrbitPos / 50); // speed up if far from orbit position
    fish.speed = fish.speed + (orbitSpeed - fish.speed) * fish.acceleration * 2;
  }
  
  // Smooth turning toward target angle
  const angleDiff = ((fish.targetAngle - fish.angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  fish.angle += Math.sign(angleDiff) * Math.min(Math.abs(angleDiff), fish.turnSpeed);
  
  // Update position based on angle and speed
  const nextX = fish.x + Math.cos(fish.angle) * fish.speed;
  const nextY = fish.y + Math.sin(fish.angle) * fish.speed;
  
  // Improved edge detection with anticipation to prevent sticking
  // Check if the next position would be too close to or beyond the edge
  const edgeMargin = EDGE_BUFFER + fish.speed * 2; // Dynamic margin based on speed
  
  // Handle horizontal boundaries with improved anticipation
  if (nextX < edgeMargin) {
    // Approaching left edge - turn right
    fish.targetAngle = 0; // Right
    // Small immediate adjustment to prevent sticking
    fish.x += Math.min(edgeMargin - nextX, fish.speed);
  } else if (nextX > tankWidth - edgeMargin) {
    // Approaching right edge - turn left
    fish.targetAngle = Math.PI; // Left
    // Small immediate adjustment to prevent sticking
    fish.x -= Math.min(nextX - (tankWidth - edgeMargin), fish.speed);
  } else {
    // Regular movement
    fish.x = nextX;
  }
  
  // Handle vertical boundaries with improved anticipation
  if (nextY < edgeMargin) {
    // Approaching top edge - turn down
    fish.targetAngle = Math.PI / 2; // Down
    // Small immediate adjustment to prevent sticking
    fish.y += Math.min(edgeMargin - nextY, fish.speed);
  } else if (nextY > tankHeight - edgeMargin) {
    // Approaching bottom edge - turn up
    fish.targetAngle = -Math.PI / 2; // Up
    // Small immediate adjustment to prevent sticking
    fish.y -= Math.min(nextY - (tankHeight - edgeMargin), fish.speed);
  } else {
    // Regular movement
    fish.y = nextY;
  }
  
  // Update tail segments
  updateFishTail(fish);
}