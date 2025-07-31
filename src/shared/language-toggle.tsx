// src/components/LanguageToggle.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "uz" ? "en" : "uz";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-black  text-white px-4 py-2 rounded transition"
    >
      {t("change_language")}
    </button>
  );
};

export default LanguageToggle;
