import React from 'react';

const Sidebar = ({setFastAdd,setVisible}) => {
    return ( 
        <div  className='Sidebar'>
        <div className='Sidebar__btns'>
        <button className='Sidebar__btn Sidebar__btn-active'>Сегодня</button>
         <button onClick={()=>setVisible(true)}  className='Sidebar__btn'>Список дел по датам</button>
         <button onClick={()=>setFastAdd(true)}  className='Sidebar__btn'>Быстрое добавление</button>
        </div>
     </div>
      );
}
 
export default Sidebar;