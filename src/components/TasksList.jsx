import { useState ,useMemo} from "react";
import TaskItem from "./TaskItem";
import Creator from "./Creator";
import { TransitionGroup,CSSTransition } from 'react-transition-group';

const TasksList = ({filter,setFilter,setPop,tasks,setTasks}) => {

    const [creatorVisible,setCreatorVisivle]=useState(false)




    const createTask=(newTask)=>{
        
        setTasks([...tasks,newTask])
        
    }
      const removeTask=(deltask)=>{
        setTasks(tasks.filter(p=>p!==deltask))

  }

    const visChange=()=>{
        setCreatorVisivle(false)
    }

    const sortTasks=useMemo(()=>{
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
           
           {creatorVisible && <Creator create={createTask} visChange={visChange}/>}
           </ul>
            {!creatorVisible && <button onClick={()=>{setCreatorVisivle(true)}} className='tasks__btn'>+Добавить</button>  }
           </div>
      
           )
         
}
 
export default TasksList;