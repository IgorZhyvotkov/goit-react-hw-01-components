import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friendsList }) => {
  return (
    <ul className="friend-list">
      {friendsList.map(({avatar, name ,isOnline, id}) => (
        <FriendListItem
          key={id}    
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {  
  friendsList: PropTypes.arrayOf(PropTypes.object).isRequired, 
};