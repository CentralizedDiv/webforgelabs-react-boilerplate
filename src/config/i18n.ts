import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment, { Moment } from 'moment';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'capitalize') {
          if (typeof value === 'string') {
            return value.charAt(0).toUpperCase() + value.slice(1);
          }
        }
        if (value instanceof moment) {
          return (value as Moment).format(format);
        }

        return value;
      },
    },
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    },
    backend: {
      loadPath: '/i18n/{{lng}}.json',
    },
  })
  .catch(() => {
    console.log('Fail initing i18n');
  });

export default i18n;
