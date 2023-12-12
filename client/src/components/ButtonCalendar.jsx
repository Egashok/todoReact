const ButtonCalendar = ({setNow,val,month,year}) => {

    function redirect(){
        setNow(String(val)+'.'+String(month+1)+'.'+String(year))
        
    }

    return ( 
        <button onClick={()=>redirect()} className="button__calendar" value={val}  >{val}</button>
        
        
        
        );
}
 
export default ButtonCalendar;