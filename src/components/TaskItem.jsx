import React from 'react';

const TaskItem = (props) => {

   function selectTask(){
    localStorage.nowtask=(props.task).id
    props.setPop(true)

  }

    return ( 
        <ol onClick={()=>selectTask()} className='tasks__item'>
          <button onClick={()=>props.remove(props.task)} className="tasks__close">X</button>
        <input  className='tasks__input' type='checkbox'/> 
      <div className='tasks__content'>
        
      <div className="task__item-top">
      <h5 className='tasks__item-title'>{props.task.title}</h5>
      <p className='tasks__item-time'>{props.task.time}</p>
      </div>
      <div className="task__item-bot">
        {props.task.body}
      </div>
        </div>
        </ol>
         );
}
 
export default TaskItem;