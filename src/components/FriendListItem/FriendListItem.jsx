import PropTypes from 'prop-types';
import { FriendsListItem, FriendsListImg, FriendsListName, FriendsListSvg} from './FriendListItem.styled';
import { VscAccount } from 'react-icons/vsc';
export const FriendListItem = ({isOnline, avatar, name,}) => {
  return (
    <FriendsListItem>
      <FriendsListSvg><VscAccount/>{isOnline}</FriendsListSvg>
      <FriendsListImg src={avatar} alt="User avatar" width="48" />
      <FriendsListName>{name}</FriendsListName>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 
};
