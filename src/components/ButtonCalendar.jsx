const ButtonCalendar = (num) => {
console.log(num)
    return ( 
        <button className="button__calendar" value={num.val}  >{num.val}</button>
        
        
        
        );
}
 
export default ButtonCalendar;