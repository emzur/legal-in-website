import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Ładuje tłumaczenia z serwera np. /locales/en/translation.json
  .use(LanguageDetector) // Wykrywa język użytkownika
  .use(initReactI18next) // Przekazuje instancję i18n do react-i18next
  .init({
    supportedLngs: ['pl', 'uk'],
    fallbackLng: 'pl', // Język domyślny, jeśli wykryty język nie jest wspierany
    defaultNS: 'translation', // Domyślna przestrzeń nazw dla tłumaczeń
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'], // Gdzie przechowywać wykryty język
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ścieżka do plików językowych
    },
    react: {
      useSuspense: true, // Użyj Suspense dla ładowania tłumaczeń
    },
  });

export default i18n;