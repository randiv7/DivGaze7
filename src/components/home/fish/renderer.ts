// Functions for rendering fish and water effects
import { Fish } from './types';

/**
 * Draws the water texture/background
 */
export function drawWaterTexture(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  // Main water gradient
  const gradient = ctx.createRadialGradient(
    width / 2, height / 2, 0,
    width / 2, height / 2, Math.max(width, height) / 1.5
  );
  
  gradient.addColorStop(0, 'rgba(16, 24, 56, 0.6)');
  gradient.addColorStop(1, 'rgba(10, 15, 44, 0.8)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Vignette effect around edges
  const vignetteGradient = ctx.createRadialGradient(
    width / 2, height / 2, Math.min(width, height) * 0.3,
    width / 2, height / 2, Math.max(width, height) / 1.8
  );
  
  vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
  
  ctx.fillStyle = vignetteGradient;
  ctx.fillRect(0, 0, width, height);
}

/**
 * Draws a fish - new top-down flattened design
 */
export function drawFish(ctx: CanvasRenderingContext2D, fish: Fish): void {
  ctx.save();
  
  // Calculate body dimensions based on fish size
  const bodyWidth = fish.size * 0.6; // Main body width
  const bodyHeight = fish.size * 0.3; // Main body height
  const tailLength = fish.size * 0.8; // Tail length - at least 50% of total length as specified
  
  // Position for drawing
  const centerX = fish.x;
  const centerY = fish.y;
  
  // Rotation based on fish angle
  ctx.translate(centerX, centerY);
  ctx.rotate(fish.angle);
  
  // Draw tail first (behind body)
  drawFishTail(ctx, fish, tailLength, bodyWidth, bodyHeight);
  
  // Draw main body (neon cyan elliptical shape)
  ctx.beginPath();
  ctx.ellipse(0, 0, bodyWidth, bodyHeight, 0, 0, Math.PI * 2);
  
  // Add glow effect based on state
  const glowIntensity = fish.state === 'chasing' ? 20 : 
                       fish.state === 'inspecting' ? 15 : 10;
  ctx.shadowBlur = glowIntensity;
  ctx.shadowColor = '#00FFFF';
  
  // Solid bright cyan color for body
  ctx.fillStyle = '#00FFFF';
  ctx.fill();
  
  // Add subtle highlight for depth
  ctx.beginPath();
  ctx.ellipse(-bodyWidth * 0.2, -bodyHeight * 0.2, bodyWidth * 0.4, bodyHeight * 0.3, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fill();
  
  // Add cybernetic detail based on state
  if (fish.state === 'chasing' || fish.state === 'inspecting') {
    // Inner tech circle
    ctx.beginPath();
    ctx.arc(0, 0, bodyWidth * 0.4, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Pulsing effect based on state time
    if (fish.state === 'inspecting') {
      const pulseSize = 0.3 + 0.1 * Math.sin(fish.stateTime / 200);
      ctx.beginPath();
      ctx.arc(0, 0, bodyWidth * pulseSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
      ctx.stroke();
    }
  }
  
  ctx.restore();
}

/**
 * Draws the fish tail with fluid motion
 */
function drawFishTail(
  ctx: CanvasRenderingContext2D, 
  fish: Fish, 
  tailLength: number, 
  bodyWidth: number, 
  bodyHeight: number
): void {
  // We'll use the fish's tail segments to create a smooth curve
  if (fish.tailSegments.length === 0) return;
  
  // Starting point for the tail (back of the body)
  const startX = -bodyWidth * 0.5; // Slightly behind center of fish body
  const startY = 0;
  
  ctx.beginPath();
  ctx.moveTo(startX, startY - bodyHeight * 0.3); // Top edge of body
  
  // Create control points based on tail segments for smooth curve
  const points = [];
  const numPoints = fish.tailSegments.length;
  
  // Build tail path based on segment positions
  for (let i = 0; i < numPoints; i++) {
    const segment = fish.tailSegments[i];
    const segmentFraction = (i + 1) / numPoints;
    
    // Calculate segment position in local space
    const distanceFromBody = tailLength * segmentFraction;
    const widthAtSegment = bodyWidth * 0.5 * (1 - segmentFraction); // Gradually taper width
    
    // Get wobble amount based on segment position and tail physics
    const wobbleAmplitude = fish.wobbleIntensity * (1 - segmentFraction) * 15;
    const wobbleOffset = fish.wobbleOffset + segmentFraction * 2;
    const wobbleY = Math.sin(wobbleOffset) * wobbleAmplitude;
    
    // Store point for curve
    points.push({
      x: startX - distanceFromBody,
      y: wobbleY,
      width: widthAtSegment
    });
  }
  
  // Draw the tail as a smooth path
  ctx.beginPath();
  
  // Top edge of tail
  ctx.moveTo(startX, -bodyHeight * 0.4); // Start at top of back
  
  // Draw top curve with points
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    // Create a smooth curve along tail segments
    if (i === 0) {
      ctx.quadraticCurveTo(
        point.x + tailLength * 0.1, -bodyHeight * 0.3,
        point.x, point.y - point.width
      );
    } else {
      const prevPoint = points[i-1];
      // Use control points for smoother curve
      const cpX = (prevPoint.x + point.x) / 2;
      const cpY = (prevPoint.y - prevPoint.width + point.y - point.width) / 2;
      ctx.quadraticCurveTo(cpX, cpY, point.x, point.y - point.width);
    }
  }
  
  // Tip of tail
  const lastPoint = points[points.length - 1];
  
  // Bottom edge of tail (connecting back)
  for (let i = points.length - 1; i >= 0; i--) {
    const point = points[i];
    if (i === points.length - 1) {
      // End point
      ctx.lineTo(point.x, point.y + point.width);
    } else {
      const nextPoint = points[i+1];
      // Use control points for smoother curve
      const cpX = (nextPoint.x + point.x) / 2;
      const cpY = (nextPoint.y + nextPoint.width + point.y + point.width) / 2;
      ctx.quadraticCurveTo(cpX, cpY, point.x, point.y + point.width);
    }
  }
  
  // Close the path
  ctx.lineTo(startX, bodyHeight * 0.4); // Bottom of back
  
  // Create a gradient for the tail to give it a semi-transparent effect
  const tailGradient = ctx.createLinearGradient(startX, 0, lastPoint.x, 0);
  tailGradient.addColorStop(0, 'rgba(0, 255, 255, 0.7)');
  tailGradient.addColorStop(0.7, 'rgba(0, 255, 255, 0.3)');
  tailGradient.addColorStop(1, 'rgba(0, 255, 255, 0.1)');
  
  ctx.fillStyle = tailGradient;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
  
  // Fill the tail with semi-transparent color
  ctx.fill();
  
  // Add an subtle outer glow
  ctx.beginPath();
  ctx.moveTo(startX, -bodyHeight * 0.3);
  
  // Simplified path for the glow effect
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    ctx.lineTo(point.x, point.y - point.width * 1.2);
  }
  
  for (let i = points.length - 1; i >= 0; i--) {
    const point = points[i];
    ctx.lineTo(point.x, point.y + point.width * 1.2);
  }
  
  ctx.closePath();
  
  // Add outer glow effect to tail
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#00FFFF';
  ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.stroke();
}