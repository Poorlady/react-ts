import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Todo } from './model/todoModel'

function App() {
  // to pass the todos we need to add props type to Todo Elem
  // const todos = [{ id: 1, activity: "Water the garden" }]
  const [todos, setTodos] = useState<Todo[]>([])
  const todoAddHandle = (text:string) => {
    setTodos(prevState => [...prevState, {id:Math.random(), activity:text}])
  }

  const todoDeleteHandle = (id:number) => {
    setTodos(prevState => prevState.filter(todo =>todo.id !== id))
  }

  return (
    <div className="App">
      {/* by adding props type to todolist component
      we now able to pass proper props to the component*/}
      <TodoList deleteTodo={todoDeleteHandle} items={todos} />
      <TodoForm addTodo={todoAddHandle}/>
    </div>
  )
}

export default App
