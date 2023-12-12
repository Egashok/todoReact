// import { useState,useEffect,useReducer } from 'react';
// import ButtonCalendar from './ButtonCalendar';

// const CalendarTable = ({month,year,firstDay,monthStep}) => {

//     let daysName = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
//     let nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let dayInMonth = nDays[month]



//     useEffect(()=>{
//         setAr(calculateCalendar())
    
//     },[monthStep])
    
//     function calculateCalendar(step = 0) {

      
//         month = month + step

//         if (month == 13) {
//             month = 0
//             year=year+ 1

//         }
//         if (month == 0) {
//             year =year- 1
//             month = 11

//         }
       
//         firstDay = new Date(year, month, 1).getDay();


//         let matrix = []

//         let label = firstDay - 1

//         let num = 1;
//         matrix[0] = daysName

//         for (let i = 1; i < 7; i++) {
//             matrix[i] = [];
//             if (i != 1) label = 0
//             for (let j = 0; j < 7; j++) {

//                 if (label != 0 && label > j) {
//                     matrix[i][j] = "#";
//                 }
//                 else if (num <= dayInMonth) {
//                     matrix[i][j] = num;
//                     num++
//                 }
//                 else {

//                     matrix[i][j] = "#"
//                 }

//             }

//         }

//         const array = []
//         matrix.forEach((i) => {
//             i.map((e) => {
//                 array.push(<ButtonCalendar val={e} />)

//             })
//         })
//         return array
//     }
//     const [ar,setAr]=useState(calculateCalendar(monthStep))
//     return (  
        
//         <div className="calendar__table">
//            <div>
    
//            </div>
//             {ar}

//         </div>
//         );
// }
 
// export default CalendarTable;