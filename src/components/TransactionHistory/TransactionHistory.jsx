import PropTypes from 'prop-types';
import { Table, TableThead, TableBodyTD, TableBodyTr,  } from './TransctionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableThead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyTr key={id}>
            <TableBodyTD>{type}</TableBodyTD>
            <TableBodyTD>{amount}</TableBodyTD>
            <TableBodyTD>{currency}</TableBodyTD>
          </TableBodyTr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,    
  })).isRequired,
};
