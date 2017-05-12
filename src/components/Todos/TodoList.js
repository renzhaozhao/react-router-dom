import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        onTodoClick={() => onTodoClick(todo.id)}
        onTodoDelete={() => onTodoDelete(todo.id)}
        {...todo}
      />
    )}
  </ul>
)

export default TodoList
