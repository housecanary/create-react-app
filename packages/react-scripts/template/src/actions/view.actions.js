// @flow
export const LOAD_VIEW = 'LOAD_VIEW';

export type ViewTypes = 'dashboard';

export type ViewAction = {
  type: 'LOAD_VIEW',
  payload: {
    view: ViewTypes,
  },
};

export const loadView = (view: ViewTypes): ViewAction => ({
  type: LOAD_VIEW,
  payload: { view },
});
