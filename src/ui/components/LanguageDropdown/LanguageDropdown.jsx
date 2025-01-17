import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getLanguageIcon, changeLanguage } from "@utils";

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [lng, setLng] = useState(i18n.language);

  useEffect(() => {
    setLng(i18n.language);
  }, [i18n.language]);

  return (
    <div className="relative bg-white/10 backdrop-blur-sm rounded-md w-14 p-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white flex items-center justify-center space-x-1"
      >
        <span className="text-2xl">{getLanguageIcon(lng)}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-14 bg-white rounded-md shadow-lg py-1">
          <a
            href="#"
            onClick={() => {
              changeLanguage("en");
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-2xl text-gray-800 hover:bg-gray-100"
          >
            🇺🇸
          </a>
          <a
            href="#"
            onClick={() => {
              changeLanguage("es");
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-2xl text-gray-800 hover:bg-gray-100"
          >
            🇪🇸
          </a>
          <a
            href="#"
            onClick={() => {
              changeLanguage("pt");
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-2xl text-gray-800 hover:bg-gray-100"
          >
            🇧🇷
          </a>
        </div>
      )}
    </div>
  );
};
