import { networkLinks } from '@/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NetworkLinks = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex gap-3.5">
      {networkLinks.map((networkLink) => (
        <li key={networkLink.path}>
          <Link
            className="bg-primary text-background dark:text-foreground flex h-7.5 w-7.5 items-center justify-center overflow-hidden rounded-full text-lg transition-opacity hover:opacity-60"
            to={t(networkLink.path)}
            target="_blank"
          >
            {t(networkLink.text)}
          </Link>
        </li>
      ))}
    </ul>
  );
};
