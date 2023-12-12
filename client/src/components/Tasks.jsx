import { useState,useEffect,useReducer} from "react";
import TasksList from "./TasksList";
import Modal from "./UI/Modal";
import Cardpopup from "./UI/Cardpopup";
import {useParams} from 'react-router-dom'
import { fetchTask } from "../http/taskApi";

const Tasks = ({now,date,filter,setFilter,Select,fastAdd}) => {

  const [tasks,setTasks]=useState(fetchTask(1))

  const[sort,setSort]=useState([])
  
  useEffect(()=>{
    setTasks(fetchTask(now))
    
  },[fastAdd,now])



  useEffect(()=>{
  
    tasks.then(a => {
      setSort(a)
    });
  },[tasks,fastAdd])


// useEffect(() => {
//   fetchTask().then(data => setTasks(data))
// }, [])

    const [pop,setPop]=useState(false)
    return ( 
      <div className='tasks__wrapper'>
          {pop && <Cardpopup tasks={sort}/>}
        <div className='tasks__top'>
          <h1 className='main__title'>{date}</h1> <button   className='main__btn'>
           <Select
            value={filter.sort}
            onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
            defaultValue="Сортировка"
            options={[
            {value: '', name:'По добавлению'},
            {value: 'title', name:'По названию'},
            {value: 'time', name:'По дедлайну'},
          
          ]}
          /></button>
          </div>

        <TasksList now={now}  tasks={sort} setTasks={setSort} setPop={setPop} filter={filter} setFilter={setFilter}/>
     </div>
      );
}
 
export default Tasks;