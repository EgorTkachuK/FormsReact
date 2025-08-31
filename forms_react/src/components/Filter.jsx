import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
    border-radius: 4px;
  border:    3px solid #ddd;
`;

function Filter({ value, onChange }) {
  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Фільтрувати завдання"
      />
    </Wrapper>
  );
}

export default Filter;
