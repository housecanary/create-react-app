// @flow
import React from 'react';
import { Button, ProgressBar } from 'react-toolbox';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';

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
      <Table selectable={false}>
        <TableHead>
          <TableCell>Name</TableCell>
        </TableHead>
        {
          orders.map(order => {
            return <TableRow key={order.id}
              className={`${styles.row}`}
              title='View Order Items'>
              <TableCell>{order.name}</TableCell>
            </TableRow>;
          })
        }
      </Table>
    </div>
  );
};

export default OrderList;
