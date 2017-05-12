import React from 'react'

const Todo = ({ onTodoClick, onTodoDelete, completed, text }) => {
  return (
    <li>
      <span
        onClick={onTodoClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >{text}</span>
      <button onClick={onTodoDelete}>删除</button>
    </li>
  )
}

export default Todo
