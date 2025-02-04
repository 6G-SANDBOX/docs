import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import { Construction, Rocket } from 'lucide-react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <p className='hero__description'>
          This documentation provides comprehensive guides, tutorials and resources for using the tools and technologies of the 6G-SANDBOX project.
        </p>
        <p className='hero__work-in-progress'>
          <Construction size={20} className={styles.icon} /> We are actively working on improving and expanding this documentation. Stay tuned for updates! <Rocket size={20} className={styles.icon} />
        </p>
        <div className={styles.buttons}>
          <a className='button button--secondary button--lg' href='/docs/introduction'>
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} DOCS`}
      description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
