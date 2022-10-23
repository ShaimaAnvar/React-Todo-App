import React,{useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('')
    const submitHandler =e=>{
        e.preventDefault()
    }
  return (
    <div>
        <form className='todo-form'onSubmit={submitHandler}>
            <input type="text" 
            placeholder='Add a todo' 
            value={input} 
            name="text"
            className='todo-input'/>
            <button className='todo-button'>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm