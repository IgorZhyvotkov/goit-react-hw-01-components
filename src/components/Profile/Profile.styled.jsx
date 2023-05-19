import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  width: 180px;
  height: 200px;
  text-align: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

`;

export const ProfileName = styled.p`
  margin: 0;
  padding-top: 4px;
  font-weight: 500;
  font-size: 16px;
`;

export const ProfileTag = styled.p`
  margin: 0;
  padding-top: 4px;
  font-size: 12px;
  color: #757575;
`;

export const ProfileStats = styled.ul`
padding: 0;
display: flex;
justify-content: space-around;

`;

export const ProfileStatsItem = styled.li`
display: flex;
flex-direction: column;
width: 90px;
border: 0.1px solid grey;
background-color: #c5b7b7;
`;

export const ProfileStatsText = styled.span`
margin: 0;
padding-top: 4px;
padding-bottom: 4px;
font-size: 12px;
`;