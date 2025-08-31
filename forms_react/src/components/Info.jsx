import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  margin-bottom: 20px;
  font-size: 1rem;
`;

const InfoText = styled.p`
  margin: 4px 0;
`;

function Info({ total, completed }) {
  return (
    <InfoContainer>
      <InfoText>Загальна кількість: {total}</InfoText>
      <InfoText>Виконано: {completed}</InfoText>
    </InfoContainer>
  );
}

export default Info;
