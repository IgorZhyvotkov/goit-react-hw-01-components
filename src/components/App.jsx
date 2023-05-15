import { Profile } from "./Profile/Profile";
import user from '../dataJson/user.json'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile user={user}/>
    </div>
  );
};
