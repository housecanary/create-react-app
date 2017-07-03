// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Layout, Panel } from 'react-toolbox';

import type { Dispatch } from 'redux';
import type { DashboardState } from '../reducers/dashboard.reducer';
import type { Order } from '../actions/order.actions';

import OrderList from '../components/OrderList';
import dashboardSelector from '../selectors/dashboard.selector';

import styles from './dashboard.css';
import commonStyles from './common.css';

type DashboardProps = {
  dashboardState: DashboardState
}

class Dashboard extends React.Component {
  props: DashboardProps;
  form: any;

  render () {
    const {
      dashboardState
    } = this.props;
    return (
      <Layout>
        <Panel>
          <div className={commonStyles.panelContent}>
            <div className={commonStyles.clientHeader}>
              <div>
                <h2>Dashboard</h2>
              </div>
            </div>
            <div className={commonStyles.listContainer}>
              <OrderList
                orders={dashboardState.orders.pageItems}
                errorMessage={dashboardState.orders.errorMessage}
                />
            </div>
          </div>
        </Panel>
      </Layout>
    );
  }
}

function mapStateToProps (state) {
  return { dashboardState: dashboardSelector(state) };
}

function mapDispatchToProps (dispatch : Dispatch<*>) {
  return {
  };
}

const DashboardWrapped = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardWrapped;
