import PropTypes from 'prop-types';
import { StatisticsSection,StatisticsTitle, StatisticsStats, StatisticsStatsItem, StatisticsStatsText, } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsStats>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsStatsItem key={id}>
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
  stats: PropTypes.arrayOf(PropTypes.object).isRequired, 
};
