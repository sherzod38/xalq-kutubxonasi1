import { useState } from 'react';
import './Hour.scss'

const Hour = ({city}) => {
    const [time,setTime] = useState({second: "",minute: ""})
    function Gettime() {
     setInterval(() => {
        let cleartime = new Date();

    setTime({
      second: cleartime.getHours(),
      minute: cleartime.getMinutes()
    })
     },1000);
   }

  Gettime()

    return (
        <>
          <p>
             <span>{time.second}:{time.minute},{city}</span>
             <span></span>
          </p>
        </>
    )
}

export default Hour;