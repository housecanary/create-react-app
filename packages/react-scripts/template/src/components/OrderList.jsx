// @flow
import React from 'react';

import type { Order } from '../actions/order.actions';

import styles from './order-list.css';

export type OrderListProps = {
  orders: Order[],
  errorMessage: ?string
}

const OrderList = ({
  orders,
  errorMessage
} : OrderListProps) => {
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              <div>Name</div>
            </th>
          </tr>
          {
            orders.map(order => {
              return <tr key={order.id}
                className={`${styles.row}`}
                title='View Order Items'>
                <td>{order.name}</td>
              </tr>;
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
