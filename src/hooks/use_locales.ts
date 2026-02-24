import { ELocales } from '@/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLocales = () => {
  const { i18n } = useTranslation();
  const curLanguage = getShortLang(i18n.language);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(curLanguage);

  function getShortLang(lang: string) {
    return lang.split('-')[0];
  }

  const onLangChange = () => {
    if (curLanguage === ELocales.ru) {
      setSelectedLanguage(ELocales.en);
      i18n.changeLanguage(ELocales.en);
    } else {
      setSelectedLanguage(ELocales.ru);
      i18n.changeLanguage(ELocales.ru);
    }
  };

  return { selectedLanguage, setSelectedLanguage, onLangChange };
};
