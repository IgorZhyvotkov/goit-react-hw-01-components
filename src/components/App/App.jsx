import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from 'dataJson/user.json';
import data from 'dataJson/data.json';
import friends from 'dataJson/friends.json';
import transactions from 'dataJson/transactions.json'

import { Countainer } from './App.styled';

export const App = () => {
  return (
    <Countainer>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsList={friends} />
      <TransactionHistory items={transactions}/>
    </Countainer>
  );
};
