import PropTypes from 'prop-types';
import { FriendsListItem, FriendsListMarker, } from './FriendListItem.styled';
export const FriendListItem = ({isOnline, avatar, name,}) => {
  return (
    <FriendsListItem>
      <FriendsListMarker>{isOnline}</FriendsListMarker>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 
};
