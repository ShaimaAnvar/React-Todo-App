import React,{useState} from 'react'

function TodoApp() {
    const [task, setTask] = useState('')
    // const submitHandler =e=>{
    //     e.preventDefault()
    // }
    const handleChange =(e)=>{
      setTask(e.target.value)
    };
    const addTask = () => {
      console.log(task);
    };
  return (
    <div>
        <input type="text" name="text" id='text' placeholder='Add a task here..' 
        onChange={(e)=>handleChange(e)} />
        <button className='todo-btn' onClick ={addTask}>Add</button>
       
    </div>
  )
}

export default TodoApp