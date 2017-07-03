// @flow
import type { Action } from '../actions';
import type { Order } from '../actions/order.actions';

import {
  ORDERS_LOAD_SUCCESS,
  ORDERS_LOAD_ERROR,
} from '../actions/order.actions';

export type DashboardState = {
  orders: {
    pageItems: Order[],
    errorMessage: ?string,
  },
};

const defaultState = {
  orders: {
    pageItems: [],
    errorMessage: null,
  },
};

export function dashboardReducer(
  state: DashboardState = defaultState,
  action: Action
): DashboardState {
  switch (action.type) {
    case ORDERS_LOAD_SUCCESS: {
      return {
        ...state,
        orders: {
          pageItems: action.payload.orders,
          errorMessage: null,
        },
      };
    }
    default: {
      return state;
    }
  }
}
