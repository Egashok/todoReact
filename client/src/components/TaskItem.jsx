import React from 'react';

const TaskItem = (props) => {
  function selectTask() {
    localStorage.nowtask = (props.task).id
    props.setPop(true)

  }

  return (
    <ol onClick={() => selectTask()} className='tasks__item'>
      
      <div className='tasks__content'>

        <div className="task__item-top">
          <p className='tasks__item-title'>{props.task.title}</p>
          <p className='tasks__item-time'>{props.task.time}</p>
          <button onClick={() => props.remove(props.task)} className="tasks__close">X</button>
        </div>
        <div className="task__item-bot">
          <p className='tasks__item-body'>{props.task.body}</p>
        </div>
      </div>
    </ol>
  );
}

export default TaskItem;