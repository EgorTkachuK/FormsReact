
import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display:       flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex:      1;
  padding:   8px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-left: 8px;
  padding:     8px 16px;
  font-size:   1rem;
  cursor:      pointer;
`;

class TodoEditor extends Component {

  state = {
    textValue: ''
  };

  handleChange = e => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { textValue } = this.state;
    const trimmed = textValue.trim();
    if (!trimmed) return;

    this.props.onAdd(trimmed);
    this.setState({ textValue: '' });
  };

  render() {
    const { textValue } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={textValue}
          onChange={this.handleChange}
          placeholder="Введіть нове завдання"
        />
        <Button type="submit">Додати</Button>
      </Form>
    );
  }
}

export default TodoEditor;
