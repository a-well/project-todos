/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import todos from 'reducers/todo'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

const TodoList = () => {
  const dispatch = useDispatch()
  const allTodos = useSelector((store) => store.todos.items)

  const onDone = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const onDelete = (todoIndex) => {
    dispatch(todos.actions.deleteItem(todoIndex))
  }

  const todosTodo = allTodos.filter((todo) => !todo.isDone)
  const doneTodos = allTodos.filter((todo) => todo.isDone)

  console.log(todosTodo)

  return (
    <>
      <h2>TO-DO ({todosTodo.length})</h2>

      {todosTodo.length === 0 && (
        <p>Wow you are all DONE baby</p>
      )}

      {todosTodo.map((todo, index) => (<TodoItem
        todo={todo}
        index={index}
        key={todo.id}
        onDelete={onDelete}
        onDone={onDone} />))}

      <AddTodo />

      <h2>DONE ({doneTodos.length})</h2>

      {doneTodos.map((todo, index) => (<TodoItem
        todo={todo}
        index={index}
        key={todo.id}
        onDelete={onDelete}
        onDone={onDone} />))}
    </>
  )
}

export default TodoList