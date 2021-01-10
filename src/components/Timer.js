import React, {useEffect, useState} from 'react'
import moment from 'moment'

const Timer = ({currentTime, label}) => {
    const [time, setTime] = currentTime;
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [unit] = 'seconds';




    function formatTwoDigits(number) {
        return ((number < 10) ? '0' + number : number);
    }


    return (
        <div>
            <h1 className="timeset-wrapper">
                {formatTwoDigits(moment.duration(time, unit).hours())} :
                {formatTwoDigits(moment.duration(time, unit).minutes())} :
                {formatTwoDigits(moment.duration(time, unit).seconds())}
            </h1>
        </div>
    )
};

export default Timer
