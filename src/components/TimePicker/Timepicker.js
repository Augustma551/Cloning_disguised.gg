import { useState, useEffect } from "react";
import './../TimePicker/TimePicker.scss';

function TimePicker(){

    const [time, setTime] = useState({hours: '00', minutes: '00'})

    useEffect(()=>{
        const interval = setInterval(()=>{

            const now = new Date();
            const hours = String(now.getHours()).padStart(2,'0')
            const minutes= String(now.getMinutes()).padStart(2, '0')

             setTime({hours, minutes});
            }, 1000)
      
        return ()=>clearInterval(interval)
    },[]);


    return(
    <div className="TimePicker">
        <h1 className="Time">{`${time.hours} : ${time.minutes} `}</h1>
        <h1 className="Headline">Pacific Standard Time</h1>
    </div>
    )
}

export default TimePicker;