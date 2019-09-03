import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../components/Todos';
import TodosEntry from '../components/TodosEntry';
import todosData from './todosData';
import { exportAllDeclaration } from '@babel/types';
describe('Should render component Places', () => {
  const todos = shallow(<Todos />);
  todos.setState({
    todos: todosData,
    index: 0,
    direction: '',
    key: ''
  })

  it('renders without crashing', () => {
    expect(todos.not.toBeUndefined);
  });
  it('should render component Places', () => {
    expect(todos.find(TodosEntry).length).toBe(19);
  })
});