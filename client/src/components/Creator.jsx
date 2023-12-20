import { useState, useReducer } from "react";

const Creator = ({ now, visChange, create, add, setAdd }) => {


  const [task, setTask] = useState({ date: now, title: '', body: '', time: '' });

  const addNewTask = function (e) {
    e.preventDefault()
    const newTask = {
      ...task
    }

    create(newTask)

    setTask({ date: '', title: '', body: '', time: '' })

  }

  return (
    <div className='creator'>
      <div className='creator__top'>
        <input value={task.title} onChange={e => setTask({ ...task, title: e.target.value })} placeholder='Название задачи' className='creator__name' />
        <input value={task.time} onChange={e => setTask({ ...task, time: e.target.value })} placeholder='00:00' className='creator__time' />
      </div>
      <div className='creator__bottom'>
        <input value={task.body} onChange={e => setTask({ ...task, body: e.target.value })} placeholder='Описание задачи' className='creator__body' />
      </div>
      <div className='creator__btns'>
        <button onClick={visChange} className='creator__cancel'>Отмена</button>
        <button onClick={addNewTask} className='creator__task'>Добавить задачу</button>

      </div>

    </div>
  );
}

export default Creator;