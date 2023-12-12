import { useState ,useMemo,useReducer} from "react";
import TaskItem from "./TaskItem";
import Creator from "./Creator";
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import { useEffect } from "react";
import {useParams} from 'react-router-dom'
import { createTask,remove } from "../http/taskApi";


const TasksList = ({now,filter,setFilter,setPop,tasks,setTasks}) => {

    const [creatorVisible,setCreatorVisivle]=useState(false) 

    const [add,setAdd]=useState(false) 
 
  const[_,update]=useReducer(z => z + 1, 0)

    const create =(newTask)=>{
      setTasks([...tasks,newTask])
      createTask(newTask) 
        
    }
      const removeTask=(deltask)=>{
        remove(deltask.id)
        setTasks(tasks.filter(p=>p!==deltask))

  }
  useEffect(()=>{
    
  },[tasks])

    const visChange=()=>{
        setCreatorVisivle(false)
    }

    const  sortTasks=useMemo(()=>{
      

     
        if(filter.sort){
          return [...tasks].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return tasks
    
      },[filter.sort,tasks])

    return (
        <div className='tasks_container'>
           <ul className='tasks__list'>
          
          {sortTasks.map((task)=>
    
        <TaskItem setPop={setPop} remove={removeTask} task={task}></TaskItem>
    
        )}
           
           {creatorVisible && <Creator now={now} add={add} setAdd={setAdd} create={create} visChange={visChange}/>}
           </ul>
            {!creatorVisible && <button onClick={()=>{setCreatorVisivle(true)}} className='tasks__btn'>+Добавить</button>  }
           </div>
      
           )
         
}
 
export default TasksList;