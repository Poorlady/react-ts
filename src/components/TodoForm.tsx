import React, { FormEvent, useRef } from 'react'

interface TodoFormProps {
    addTodo:(text:string) => void
}

const TodoForm = (props:TodoFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (event:FormEvent)=>{
        event.preventDefault()
        // console.log(inputRef.current!.value)
        props.addTodo(inputRef.current!.value)
        inputRef.current!.value = ''
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='todo-task'>Task</label>
        <input ref={inputRef} type='text' id='todo-task'/>
        <button type='submit'>Submit Task</button>
    </form>
  )
}

export default TodoForm