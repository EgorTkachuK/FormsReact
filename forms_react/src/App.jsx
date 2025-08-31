import React, { Component } from 'react';
import styled from 'styled-components';
import initialTodos from './data/todos.json';
import TodoList  from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter     from './components/Filter';
import Info       from './components/Info';

const Container = styled.div`
  padding:    20px;
  max-width:  500px;
  margin:     0 auto;
`;

const Title = styled.h1`
  text-align:     center;
  margin-bottom:  24px;
`;

class App extends Component {

  state = {
    todos:  initialTodos,
    filter: ''
  };

  addTodo = text => {
    const newTodo = {
      id: `id-${Date.now()}`,
      text,
      completed: false
    };
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  };

  toggleTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { todos, filter } = this.state;
    const normalizedFilter  = filter.toLowerCase();
    const visibleTodos      = todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );

    const totalCount     = todos.length;
    const completedCount = todos.filter(t => t.completed).length;

    return (
      <Container>
        <Title>Мій список завдань</Title>

        <TodoEditor onAdd={this.addTodo} />

        <Filter
          value={filter}
          onChange={this.handleFilterChange}
        />

        <Info
          total={totalCount}
          completed={completedCount}
        />

        <TodoList
          todos={visibleTodos}
          onToggle={this.toggleTodo}
          onDelete={this.deleteTodo}
        />
      </Container>
    );
  }
}

export default App;
