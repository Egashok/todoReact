import React from 'react';

const Sidebar = () => {
    return ( 
        <div  className='Sidebar'>
        <div className='Sidebar__btns'>
        <button className='Sidebar__btn Sidebar__btn-active'>Сегодня</button>
         <button className='Sidebar__btn'>Список дел по датам</button>
         <button className='Sidebar__btn'>Список дел по</button>
        </div>
     </div>
      );
}
 
export default Sidebar;