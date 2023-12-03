import './Calendar.css'

import { useEffect, useReducer, useState } from 'react';
import CalendarTable from './CalendarTable';


const Calendar = () => {

    const [monthStep, setMonthStep] = useState(0)
    let state = {
        activeDate: new Date()
    }
    var year = state.activeDate.getFullYear();
    var month = state.activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();

    const [m,setM]=useState(month+1)
    const [y,setY]=useState(year)
    




   

    function changeCalendar(step) {
        setMonthStep(monthStep + step)
        setM(step+m)

        if (m == 12) {
            setM(1)
            setY(year+1)

        }
        else if (m == 0) {
            setY(year-1)
            setM(12)

        }

    }
   


    return (

        <div className="Calendar">

            <div>
            {m}/{y}
            </div>

            <div className="array">
               <CalendarTable month={month} year={year} monthStep={monthStep} firstDay={firstDay}/>
            </div>

            <button onClick={() => changeCalendar(-1)} id="btnPrev" type="button">Предыдущий</button>
            <button onClick={() => changeCalendar(1)} id="btnNext" type="button">Следующий</button>
            <div id="divCal"></div>


        </div>



    );
}

export default Calendar;