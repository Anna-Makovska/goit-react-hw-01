import userData from './userData.json'
import friends from './friends.json'
import transactions from './transactions.json'
import 'modern-normalize'
import './App.css'
import Profile from './components/Profile/Profile/Profile';
import FriendList from './components/Friendlist/Friendlist';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="container">
    <Profile
      name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
</div>
  );
}

export default App
