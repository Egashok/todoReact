import './Calendar.css'

import { useEffect, useReducer, useState } from 'react';
import CalendarTable from './CalendarTable';


const Calendar = ({setNow}) => {


    
    const [monthStep, setMonthStep] = useState(0)
    let state = {
        activeDate: new Date()
    }
    var year = state.activeDate.getFullYear();
    var month = state.activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();

    const [m,setM]=useState(month)
    const [y,setY]=useState(year)


    function changeCalendar(step) {
        setMonthStep(monthStep + step)
        setM(step+m)

        if (step+m == 12 && step ==1) {
            setM(0)
            setY(y+1) 
        }
     
        else if (step+m == -1  && step==-1) {

            setY(y-1)
            setM(11)

        }
console.log('zx')
    }
   


    return (

        <div className="Calendar">

            <div>
            {m+1}/{y}
            </div>

            <div className="array">
               <CalendarTable setNow={setNow}  month={m} year={y} monthStep={monthStep} firstDay={firstDay}/>
            </div>

            <button onClick={() => changeCalendar(-1)} id="btnPrev" type="button">Предыдущий</button>
            <button onClick={() => changeCalendar(1)} id="btnNext" type="button">Следующий</button>
            <div id="divCal"></div>


        </div>



    );
}

export default Calendar;