import PropTypes from 'prop-types';
import { StatisticsSection,StatisticsTitle, StatisticsStats, StatisticsStatsItem, StatisticsStatsText, } from './Statistics.styled';
import { getRandomHexColor } from 'components/FriendListItem/FriendListItem';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsStats>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsStatsItem key={id} style={{backgroundColor:  getRandomHexColor()}}>
            <StatisticsStatsText>{label}</StatisticsStatsText>
            <StatisticsStatsText>{percentage}%</StatisticsStatsText>
          </StatisticsStatsItem>
        ))}
      </StatisticsStats>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired, 
};
