
import { Fragment } from 'react';
import { Hero, CallToAction } from './components';
import PlatformsBanner from '@/components/PlatformsBanner';
import LLMPlatformsBanner from '@/components/LLMPlatformsBanner';
import LLMFrameworksBanner from '@/components/LLMFrameworksBanner';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <div className="space-y-8 md:space-y-12">
        <PlatformsBanner />
        <LLMPlatformsBanner />
        <LLMFrameworksBanner />
      </div>
      <CallToAction />
    </Fragment>
  );
};

export default HomePage;
