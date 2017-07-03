// @flow
import type { Action } from '../actions';
import type { ViewTypes } from '../actions/view.actions';
import { LOAD_VIEW } from '../actions/view.actions';

type ViewState = {
  currentView: ViewTypes,
};

const defaultState = {
  currentView: 'home',
};

export function viewReducer(
  previousState: ViewState = defaultState,
  action: Action
): ViewState {
  switch (action.type) {
    case LOAD_VIEW: {
      return {
        currentView: action.payload.view,
      };
    }
    default: {
      return previousState;
    }
  }
}
