// @flow
export const ORDERS_LOAD_SUCCESS = 'ORDERS_LOAD_SUCCESS';
export const ORDERS_LOAD_ERROR = 'ORDERS_LOAD_ERROR';

export type Order = {
  id: string,
  name: string,
};

export type OrdersLoadSuccessAction = {
  type: 'ORDERS_LOAD_SUCCESS',
  payload: {
    orders: Order[],
  },
};

export type OrdersLoadErrorAction = {
  type: 'ORDERS_LOAD_ERROR',
  payload: {
    errorMessage: string,
  },
};

export type OrderAction = OrdersLoadSuccessAction | OrdersLoadErrorAction;

export const ordersLoadSuccess = (orders: Order[]): OrderAction => ({
  type: ORDERS_LOAD_SUCCESS,
  payload: { orders },
});
export const ordersLoadError = (errorMessage: string): OrderAction => ({
  type: ORDERS_LOAD_ERROR,
  payload: { errorMessage },
});
