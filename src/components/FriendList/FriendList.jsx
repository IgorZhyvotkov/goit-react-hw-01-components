import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendsList.styled';

export const FriendList = ({ friendsList }) => {
  return (
    <FriendsList>
      {friendsList.map(({avatar, name ,isOnline, id}) => (
        <FriendListItem
          key={id}    
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
};
FriendList.propTypes = {  
  friendsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired, 
};