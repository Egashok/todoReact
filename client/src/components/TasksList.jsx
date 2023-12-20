import { useState, useMemo } from "react";
import TaskItem from "./TaskItem";
import Creator from "./Creator";
import { useEffect } from "react";
import { createTask, remove } from "../http/taskApi";

const TasksList = ({ now, filter, setFilter, setPop, tasks, setTasks }) => {

  const [creatorVisible, setCreatorVisivle] = useState(false)

  const [add, setAdd] = useState(false)


  const create = (newTask) => {
    setTasks([...tasks, newTask])
    createTask(newTask)

  }
  const removeTask = (deltask) => {
    remove(deltask.id)
    setTasks(tasks.filter(p => p !== deltask))

  }
  useEffect(() => {

  }, [tasks])

  const visChange = () => {
    setCreatorVisivle(false)
  }

  const sortTasks = useMemo(() => {



    if (filter.sort) {
      return [...tasks].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return tasks

  }, [filter.sort, tasks])

  return (
    <div className='tasks_container'>
      <ul className='tasks__list'>

        {sortTasks.map((task) =>

          <TaskItem setPop={setPop} remove={removeTask} task={task}></TaskItem>

        )}

        {creatorVisible && <Creator now={now} add={add} setAdd={setAdd} create={create} visChange={visChange} />}
      </ul>
      {!creatorVisible && <button onClick={() => { setCreatorVisivle(true) }} className='tasks__btn'>+Добавить</button>}
    </div>

  )

}

export default TasksList;