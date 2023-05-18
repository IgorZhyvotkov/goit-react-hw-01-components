import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../dataJson/user.json';
import data from '../dataJson/data.json';
import friends from '../dataJson/friends.json';
import transactions from '../dataJson/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsList={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
