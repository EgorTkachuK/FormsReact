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
  flex: 1;
  margin-left: 8px;
  text-decoration: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`;

const DeleteButton = styled.button`
  margin-left: 8px;
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
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
