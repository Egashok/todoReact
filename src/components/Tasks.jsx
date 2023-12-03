import { useState } from "react";
import TasksList from "./TasksList";
import Modal from "./UI/Modal";
import Cardpopup from "./UI/Cardpopup";

const Tasks = ({date,filter,setFilter,Select}) => {

  const [tasks,setTasks]=useState([
    {id:1,title:"Помыть посуду",body:"Помыть тарелку и ложку ",time:"10:00"},
    {id:2,title:"Убраться в квартире",body:"Убрать гостинную",time:"20:00"},
    {id:3,title:"Погулять с собакой",body:"Погулять 30 минут с собакой ",time:"11:01"}
])

    const [pop,setPop]=useState(false)
    return ( 
      <div className='tasks__wrapper'>
          {pop && <Cardpopup tasks={tasks}/>}
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

        <TasksList tasks={tasks} setTasks={setTasks} setPop={setPop} filter={filter} setFilter={setFilter}/>
     </div>
      );
}
 
export default Tasks;