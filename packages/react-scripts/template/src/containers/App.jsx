// @flow
import React from 'react';
import { connect } from 'react-redux';

import { ROUTES } from '../routes';

export const VIEWS : {[key : string]: any} = Object.keys(ROUTES).reduce((views, key) => {
  const def = ROUTES[key];
  views[def.id] = def.view;
  return views;
}, {});

const ContentView = connect(state => ({
  selectedView: state.view.currentView
}))(({selectedView, params}) => {
  const View = VIEWS[selectedView];
  return <View />;
});

export default class App extends React.Component {
  render () {
    return (
      <ContentView />
    );
  }
}
