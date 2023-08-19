import { useState ,useMemo} from "react";
import TaskItem from "./TaskItem";
import Creator from "./Creator";
import { TransitionGroup,CSSTransition } from 'react-transition-group';

const TasksList = ({filter,setFilter}) => {

    const [creatorVisible,setCreatorVisivle]=useState(false)


    const [tasks,setTasks]=useState([
    {id:1,title:"Аоспать",body:"Жеска поспать",time:"10:00"},
    {id:2,title:"Поспать",body:"Жеска поспать",time:"20:00"},
    {id:3,title:"БЕспать",body:"Жеска неспать",time:"10:01"}
])

const [sortedTasks,setSortedTasks]=useState(tasks,filter.sort,filter.query)

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
            <h4 className='tasks__title'>Личные</h4>
           <ul className='tasks__list'>
          
            
           {sortTasks.map((task)=>
    
        <TaskItem remove={removeTask} task={task}></TaskItem>
    
        )}
           
           {creatorVisible && <Creator create={createTask} visChange={visChange}/>}
         

           </ul>
            {!creatorVisible && <button onClick={()=>{setCreatorVisivle(true)}} className='tasks__btn'>+Добавить</button>  }
           </div>
      
           )
         
}
 
export default TasksList;