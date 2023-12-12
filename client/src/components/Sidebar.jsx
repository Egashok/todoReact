import React from 'react';

const Sidebar = ({setFastAdd}) => {
    return ( 
        <div  className='Sidebar'>
        <div className='Sidebar__btns'>
        <button className='Sidebar__btn Sidebar__btn-active'>Сегодня</button>
         <button className='Sidebar__btn'>Список дел по датам</button>
         <button onClick={()=>setFastAdd(true)}  className='Sidebar__btn'>Быстрое добавление</button>
        </div>
     </div>
      );
}
 
export default Sidebar;