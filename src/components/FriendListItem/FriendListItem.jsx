import PropTypes from 'prop-types';
import { FriendsListItem, FriendsListImg, FriendsListName, FriendsListSvg} from './FriendListItem.styled';
import { GrStatusGoodSmall } from 'react-icons/gr';

export const FriendListItem = ({isOnline, avatar, name}) => {
  return (
    <FriendsListItem>
      <FriendsListSvg><GrStatusGoodSmall fill={isOnline ? "green" : "red"}/>{isOnline}</FriendsListSvg>
      <FriendsListImg src={avatar} alt="User avatar" width="48" />
      <FriendsListName>{name}</FriendsListName>
    </FriendsListItem>
  );
};

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
};
