import { Button, Title, TitleSizes } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 pb-50 text-center">
      <Title text="404" size={TitleSizes.h1} className="text-7xl!" />
      <p className="text-md mb-8">
        Page is not found! :( <br /> Back to the main page, please...
      </p>
      <Link to={'/'}>
        <Button className="w-40">
          <ArrowLeft /> Back
        </Button>
      </Link>
    </div>
  );
};
