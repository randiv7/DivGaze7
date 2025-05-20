
import React, { useState } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English" },
    { code: "si", name: "සිංහල" }, // Sinhala
    { code: "ta", name: "தமிழ்" }, // Tamil
  ];

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    // Here we would implement actual language switching functionality
    // using i18next or similar library when needed
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-electric-blue transition-colors group">
        <Globe className="h-4 w-4 group-hover:text-electric-blue" />
        <span className="hidden sm:inline">{currentLanguage}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-slate-blue-gray border-electric-blue/20">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.name)}
            className="cursor-pointer hover:bg-electric-blue/10 hover:text-electric-blue focus:bg-electric-blue/10 focus:text-electric-blue"
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
