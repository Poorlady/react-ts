import React from 'react'
// when create a todo component the prop will be a default prop from react
// so we need to create a custom prop to add our own prop
interface TodoListProps {
  items: { id: number, activity: string }[],
  deleteTodo: (id:number) => void
}

// const TodoList: React.FC<TodoListProps> = (props) => {
const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map(todo => <li key={todo.id}>
        <div>
          <p>{todo.activity}</p>
          <button onClick={props.deleteTodo.bind(null, todo.id)}>Delete</button>
        </div>
      </li>)}
    </ul>
  )
}

export default TodoList