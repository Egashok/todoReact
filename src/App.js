
import { Children, useState } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Creator from './components/Creator';
import TasksList from './components/TasksList';
import Select from './components/Select';
import Calendar from './components/Calendar';
import Modal from './components/UI/Modal';
import Tasks from './components/Tasks';
import Cardpopup from './components/UI/Cardpopup';



function App() {

  const [date,setDate]=useState('Сегодня')
  const [showSide,setShowSide]=useState(true)
  const [filter,setFilter]=useState({sort:'',query:''})
  const [visible,setVisible]=useState(true)

  const visSide=()=>{
    setShowSide(!showSide)
  }

  return (
    <div className="App">

<Modal visible={visible} setVisible={setVisible} children={<Calendar/>}></Modal>

   <Header visSide={visSide}/>
  
      <div className='main'>
      {showSide && <Sidebar/>} 

      <Tasks date={date} filter={filter} Select={Select} setFilter={setFilter} />
      </div>

    </div>
  );
}

export default App;
