import { QcIcoOutline } from '@/components/icons';
import { Card } from '@/components/ui';
import { NetworkLinks } from '@/components/shared';

export const Footer = () => {
  return (
    <footer>
      <Card className={'max-w-7xl mx-auto flex justify-between items-center py-5 px-7 rounded-2xl'}>
        <QcIcoOutline className={'text-primary'} size={36} />
        <NetworkLinks />
      </Card>
    </footer>
  );
};
