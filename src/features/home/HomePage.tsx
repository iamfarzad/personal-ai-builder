
import { Fragment } from 'react';
import { Hero, CallToAction } from './components';
import PlatformsBanner from '@/components/PlatformsBanner';
import LLMPlatformsBanner from '@/components/LLMPlatformsBanner';
import LLMFrameworksBanner from '@/components/LLMFrameworksBanner';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <PlatformsBanner />
      <LLMPlatformsBanner />
      <LLMFrameworksBanner />
      <CallToAction />
    </Fragment>
  );
};

export default HomePage;
