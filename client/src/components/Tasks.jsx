import { useState, useEffect } from "react";
import TasksList from "./TasksList";
import { fetchTask } from "../http/taskApi";

const Tasks = ({ now, date, filter, setFilter, Select, fastAdd }) => {

  const [tasks, setTasks] = useState(fetchTask(1))


  const [sort, setSort] = useState([])
  const [datVis, usedatVis] = useState(date);

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var firstDay = new Date().getDate();
  const [dv, setDv] = useState(String(firstDay) + '.' + String(month + 1) + '.' + String(year))


  useEffect(() => {
    setTasks(fetchTask(now))

  }, [fastAdd, now])

  useEffect(() => {
    if (date == dv) {
      usedatVis("Сегодня")
    }
    else {
      usedatVis(now)
    }
  }, [date])


  useEffect(() => {

    tasks.then(a => {
      setSort(a)
    });
  }, [tasks, fastAdd])

  const [pop, setPop] = useState(false)
  return (
    <div className='tasks__wrapper'>
      <div className='tasks__top'>
        <h1 className='main__title'>{datVis}</h1> <button className='main__btn'>
          <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            defaultValue="Сортировка"
            options={[
              { value: '', name: 'По добавлению' },
              { value: 'title', name: 'По названию' },
              { value: 'time', name: 'По времени' },

            ]}
          /></button>
      </div>

      <TasksList now={now} tasks={sort} setTasks={setSort} setPop={setPop} filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Tasks;