import { useState,useReducer } from "react";
import { createTask } from "../../http/taskApi";

const Creator = ({visChange,fastAdd,setFastAdd}) => {

  const [task,setTask]=useState({date:'',title:'',body:'',time:'',active:false});

  const addNewTask = function(e){
    e.preventDefault()
    const newTask={
      ...task
    }
  
    createTask(newTask) 
    setFastAdd(false)
    
  setTask({date:'',title:'',body:'',time:'',active:false})

   }

    return ( 
        <div  className='creator'>
        <div className='creator__top'>
          <input value={task.title} onChange={e=>setTask({...task,title:e.target.value})} placeholder='Название задачи' className='creator__name'/>
          <input  value={task.time} onChange={e=>setTask({...task,time:e.target.value})}  placeholder='00:00' className='creator__time'/>
          <input  value={task.date} onChange={e=>setTask({...task,date:e.target.value})}  placeholder='21.12.2023' className='creator__time'/>
        </div>
        <div className='creator__bottom'>
          <input  value={task.body} onChange={e=>setTask({...task,body:e.target.value})}  placeholder='Описание задачи' className='creator__body'/>
        </div>
        <div className='creator__btns'>
          <button onClick={()=>setFastAdd(false)} className='creator__cancel'>Отмена</button>
          <button  onClick={addNewTask} className='creator__task'>Добавить задачу</button>

        </div>

       </div>
        );
}

export default Creator; 