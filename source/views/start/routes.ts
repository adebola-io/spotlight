import { defineRoute, lazy } from '@adbl/unfinished/router';

export const startRoute = defineRoute({
  name: 'Start View',
  path: 'start',
  component: lazy(() => import('./index')),
});