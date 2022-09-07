import { createI18n } from 'vue-i18n';
// import store from '@/store';

export function loadLocaleMessages() {
  const locales = require.context('../lang/', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  return messages;
}

let language = 'vn';

let i18n = createI18n({
  locale: language,
  fallbackLocale: language,
  messages: loadLocaleMessages()
});

export function changeLanguage(locale) {
  i18n.global.locale = locale;
  i18n.global.fallbackLocale = locale
}

export default i18n;
