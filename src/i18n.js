import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./translation/english.json";
import french from "./translation/french.json";

const resources = {
  en: {
    translation: english,
  },
  fr: {
    translation: french,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
