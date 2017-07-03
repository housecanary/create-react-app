// @flow
/* global Generator */
import camelCase from 'lodash.camelcase';
import { delay } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import type { IOEffect } from 'redux-saga';

import { Client } from '../api/api-client';
import { ordersLoadSuccess, ordersLoadError } from '../actions/order.actions';

export function* loadDashboardSaga({}): Generator<IOEffect, *, *> {
  try {
    const client = new Client();
    const { data } = yield call([client, client.getOrders]);
    yield put(ordersLoadSuccess(data));
  } catch (e) {
    yield put(ordersLoadError(e.message));
  }
}
