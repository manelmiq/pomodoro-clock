import React, {useEffect, useState} from 'react'
import moment from 'moment'

const Timer = ({currentTime, label}) => {
    const [time, setTime] = currentTime;
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [unit] = 'seconds';


    useEffect( () =>{
            console.log('use effect' );
            setTime(time)
        }, [time, hour, minute]
    );

    const changeHours = (event) => {
        if(!valueBetween(0, 24, event.target.value)){
            setHour(0);
            return;
        }
        setHour(parseInt(event.target.value, 10));
        const totalTime = hour * 3600 + 60 * minute;
        setTime(totalTime);
    }

    const valueBetween= (min, max, value) =>{
        value = parseInt(value, 10);
        console.log(value);
        console.log((value >= min && value <= max));
        return (value >= min && value <= max);
    }

    const changeMinutes = (event) => {
        console.log(parseInt(event.target.value, 10));
        setMinute(parseInt(event.target.value, 10));
        const totalTime = hour * 3600 + 60* minute;
        setTime(totalTime);
    }

    function formatTwoDigits(number) {
        return ((number < 10) ? '0' + number : number);
    }

    // const emptyValue = () => {
    //     setHour('');
    //     console.log('on focus');
    // }

    return (
        <div>
            <h1 className="timeset-wrapper">
                <input type="number" name="hour" className="clockDigits"
                       value={formatTwoDigits(moment.duration(time, unit).hours())}
                       onChange={changeHours} /> :
                <input type="number" name="minute" className="clockDigits"
                       value={ formatTwoDigits(moment.duration(time, unit).minutes())}
                       onChange={changeMinutes} /> :
                <input type="number" name="seconds" className="clockDigits"
                       value={formatTwoDigits(moment.duration(time, unit).seconds())} />
            </h1>
        </div>
    )
};

export default Timer
