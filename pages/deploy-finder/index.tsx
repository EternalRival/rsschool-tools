import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { DeployFinderPage } from '@/pages/deploy-finder';
import { RouteName } from '@/shared/router';

import type { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.DEPLOY_FINDER} | ${siteTitle}`}</title>
      </Head>
      <DeployFinderPage />
    </>
  );
}
