import { useState } from 'react';
import './Hour.scss'

const Hour = () => {
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
             <span>Current time:{time.second}:{time.minute}</span>
             <span></span>
          </p>
        </>
    )
}

export default Hour;