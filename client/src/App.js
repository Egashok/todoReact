import { useEffect, useState } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Select from './components/Select';
import Calendar from './components/Calendar';
import Modal from './components/UI/Modal';
import FastAdd from './components/UI/FastAdd';
import Tasks from './components/Tasks';

function App() {

  const [showSide, setShowSide] = useState(true)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(true)
  const [fastAdd, setFastAdd] = useState(false)

  let state = {
    activeDate: new Date()
  }
  var year = state.activeDate.getFullYear();
  var month = state.activeDate.getMonth();
  var firstDay = new Date().getDate();

  const [now, setNow] = useState(String(firstDay) + '.' + String(month + 1) + '.' + String(year))
  const visSide = () => {
    setShowSide(!showSide)
  }

  useEffect(() => {
    setVisible(false)
    console.log(now)
  }, [now])

  return (
    <div className="App">

      <Modal visible={visible} setVisible={setVisible} children={<Calendar setNow={setNow} visible={visible} />}></Modal>

      <Header visSide={visSide} />

      <div className='main'>
        {showSide && <Sidebar setVisible={setVisible} setFastAdd={setFastAdd} />}
        <Modal visible={fastAdd} setVisible={setFastAdd} children={<FastAdd fastAdd={fastAdd} setFastAdd={setFastAdd} />}></Modal>

        <Tasks now={now} fastAdd={fastAdd} date={now} filter={filter} Select={Select} setFilter={setFilter} />
      </div>

    </div>
  );
}

export default App;
