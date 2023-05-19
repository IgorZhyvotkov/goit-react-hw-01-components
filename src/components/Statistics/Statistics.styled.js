
import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  width: 180px;
  height: 90px;
  text-align: center;
 
`;
export const StatisticsTitle = styled.h2`

margin: auto;
padding: 10px;
`;

export const StatisticsStats = styled.ul`
margin: 0;
padding: 0;
display: flex;
justify-content: space-around;

`;

export const StatisticsStatsItem = styled.li`
display: flex;
flex-direction: column;
width: 90px;
border: 0.1px solid grey;
height: 40px;
background-color: red;
`;

export const StatisticsStatsText = styled.span`
margin: 0;
padding-top: 2px;
padding-bottom: 2px;
font-size: 12px;
`;