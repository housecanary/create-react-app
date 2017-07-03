// @flow
/* globals Generator */
import type { ViewTypes } from './actions/view.actions';

import { loadDashboardSaga } from './sagas/dashboard.saga';
import Dashboard from './containers/Dashboard';

type ViewDefinition = {
  id: ViewTypes,
  saga: ({ [key: string]: any }) => Generator<*, *, *>,
  view: any,
};

export const ROUTES: { [key: string]: ViewDefinition } = {
  '/': {
    id: 'dashboard',
    saga: loadDashboardSaga,
    view: Dashboard,
  },
};
