import React from 'react';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './local/en.json'
import ar from './local/ar.json'
import kr from './local/kr.json'

const resources = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  },
  kr: {
    translation: kr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    },
    react:{
      useSuspense:false
    }
  });

const I18nWrapper = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default I18nWrapper;
