import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';

const menu = [
  {id: '1', dish: 'hamburger', options: [ 'salat', 'cucumber', 'onion']},
  {id: '2', dish: 'chicken', options: [ 'salat', 'cucumber', 'onion']},
  {id: '3', dish: 'pizza', options: [ 'salat', 'cucumber', 'onion']},
  {id: '4', dish: 'soup', options: [ 'salat', 'cucumber', 'onion']},
  {id: '5', dish: 'salat', options: [ 'salat', 'cucumber', 'onion']},
  {id: '6', dish: 'meat', options: [ 'salat', 'cucumber', 'onion', 'cucumber', 'onion']},
];



const WaiterOrderNew = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Meal</TableCell>
          <TableCell>Options</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {menu.map(row => (
          <TableRow key={row.id}>
            <TableCell  component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.dish}
            </TableCell>
            <TableCell>
              {row.options.map((op)=> (
                <TableCell key={op.id}>
                  {op}
                </TableCell> 
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrderNew;