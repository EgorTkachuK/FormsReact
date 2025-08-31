import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Text = styled.span`
  width: 100%;
  margin-left: 8px;
  text-decoration: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
  color: ${({ completed }) =>
    completed ? '#95a5a6' : '#2c3e50'};
`;

const DeleteButton = styled.button`
font-size: 14px;
  margin-left: 8px;
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background: #c0392b;
  }
`;

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <Text completed={todo.completed}>{todo.text}</Text>
          <DeleteButton onClick={() => onDelete(todo.id)}>
            Видалити
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
