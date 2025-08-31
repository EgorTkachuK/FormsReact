
import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display:       flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width:    100%;
  padding:   8px;
  font-size: 16px;
  border-radius: 4px;
  border:    3px solid #ddd;
`;

const Button = styled.button`
  margin-left: 8px;
  padding:     8px 16px;
  cursor:      pointer;
  background:  #2ecc71;
  color:       #fff;
  border:      none;
  border-radius: 4px;
  font-weight:  bold;
   &:hover {
    background: #27ae60;
  }
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
