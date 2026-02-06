import { networkLinks } from '@/utils';
import { Link } from 'react-router-dom';

export const NetworkLinks = () => {
  return (
    <ul className="flex gap-3.5">
      {networkLinks.map((networkLink) => (
        <li key={networkLink.path}>
          <Link
            className="bg-primary flex h-7.5 w-7.5 items-center justify-center overflow-hidden rounded-full text-lg transition-opacity hover:opacity-60"
            to={networkLink.path}
            target="_blank"
          >
            {networkLink.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
