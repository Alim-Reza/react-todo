import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';

const TodoList = ({ todos = [] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;