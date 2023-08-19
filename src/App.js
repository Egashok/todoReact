
import { useState } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Creator from './components/Creator';
import TasksList from './components/TasksList';
import Select from './components/Select';



function App() {

  const [date,setDate]=useState('Сегодня')
  const [showSide,setShowSide]=useState(true)
  const [filter,setFilter]=useState({sort:'',query:''})

   


  const visSide=()=>{
    setShowSide(!showSide)
  }


  

  return (
    <div className="App">


      <Header visSide={visSide}/>
  
        <div className='main'>
        {showSide && <Sidebar/>}
     <div className='tasks__wrapper'>
        <div className='tasks__top'>
          <h1 className='main__title'>{date}</h1> <button   className='main__btn'>
           <Select
           value={filter.sort}
           onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
  
          defaultValue="Сортировка"
          options={[
            {value: '', name:'По умолачанию'},
            {value: 'title', name:'По названию'},
            {value: 'time', name:'По времени'},
          
          ]}
          /></button>
          </div>
        <TasksList filter={filter} setFilter={setFilter}/>
     


      

     
     </div>

        </div>
    </div>
  );
}

export default App;
