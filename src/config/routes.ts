import React from 'react';

export const routes: ReadonlyArray<any> = [
  {
    path: '/sample-page',
    exact: true,
    component: React.lazy(() => import('pages/sample-page/sample-page.container')),
  },
  {
    path: '/sample-page-2',
    exact: true,
    component: React.lazy(() => import('pages/sample-page/sample-page.container')),
  },
];
