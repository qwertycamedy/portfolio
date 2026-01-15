import { Button, Title, TitleSizes, Page } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Page
      className="items-center justify-center gap-2 pb-50 text-center"
      sidebar={false}
    >
      <Title text="404" size={TitleSizes.h1} className="text-7xl!" />
      <p className="text-md mb-8">
        Page is not found! :( <br /> Back to the main page, please...
      </p>
      <Link to={'/'}>
        <Button className="w-40">
          <ArrowLeft /> Back
        </Button>
      </Link>
    </Page>
  );
};
