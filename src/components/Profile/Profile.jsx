import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsText
} from './Profile.styled';

export const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileCard>
      <div className="description">
        <ProfileImg src={avatar} alt="User avatar" className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileTag>{location}</ProfileTag>
      </div>

      <ProfileStats>
        <ProfileStatsItem>
          <ProfileStatsText >Followers</ProfileStatsText>
          <ProfileStatsText>{followers}</ProfileStatsText>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsText >Views</ProfileStatsText>
          <ProfileStatsText >{views}</ProfileStatsText>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsText >Likes</ProfileStatsText>
          <ProfileStatsText >{likes}</ProfileStatsText>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  userData: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
