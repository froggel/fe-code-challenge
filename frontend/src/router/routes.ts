import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('@/components/SymbolsView'))
  },
  {
    path: 'profile',
    component: lazy(() => import('@/components/ProfileView'))
  },
  {
    path: 'statements',
    component: lazy(() => import('@/components/StatementsView'))
  }
];

export { routes };
