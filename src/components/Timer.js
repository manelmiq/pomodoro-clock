import React, {useEffect, useState} from 'react'
import moment from 'moment'

const Timer = ({currentTime, label}) => {
    const [time, setTime] = currentTime;
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [unit] = 'seconds';

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    // });

    const changeHours = (event) => {
        if(!event.target.value || ((!event.target.value < 0) || (!event.target.value > 24 ))){
            setHour(0);
            return;
        }
        setHour(event.target.value);
        const totalTime = hour * 3600 + 60* minute;
        setTime(totalTime);
    }

    const changeMinutes = (event) => {
        setMinute(event.target.value);
        const totalTime = hour * 3600 + 60* minute;
        setTime(totalTime);
    }

    function formatTwoDigits(number) {
        return ((number < 10) ? '0' + number : number);
    }

    return (
        <div>
            <h1 className="timeset-wrapper">
                <input type="number" name="hour" className="clockDigits"
                       value={formatTwoDigits(moment.duration(time, unit).hours())}
                       min={0} max={24}      onChange={changeHours}/> :
                <input type="number" name="minute" className="clockDigits"
                       value={ formatTwoDigits(moment.duration(time, unit).minutes())}
                       onChange={changeMinutes} min={0} max={60}  /> :
                <input type="number" name="seconds" className="clockDigits"
                       value={formatTwoDigits(moment.duration(time, unit).seconds())}/>
            </h1>
        </div>
    )
};

export default Timer
