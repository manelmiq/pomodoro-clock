import React, {useEffect, useState} from 'react';
import NumberFormat from 'react-number-format';
import moment from 'moment'

const Timer = ({currentTime, label}) => {
    const [time, setTime] = currentTime;
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [timerSet, setTimerSet] = useState('000000');
    const [active, setActive] = useState(false);
    const [timeFormated, setTimeFormated] = useState('');
    const [unit] = 'seconds';


    const changeHours = (event) => {
        if (valueBetween(0, 24, event.target.value)) {
            setHour(0);
            return;
        }
        setHour(parseInt(event.target.value, 10));
        const totalTime = hour * 3600 + 60 * minute;
        setTime(totalTime);
    }
    const valueBetween = (min, max, value) => {
        value = parseInt(value, 10);
        console.log(value);
        console.log((value >= min && value <= max));
        return (value >= min && value <= max);
    }


    const changeMinutes = (event) => {
        console.log(parseInt(event.target.value, 10));
        setMinute(parseInt(event.target.value, 10));
        const totalTime = hour * 3600 + 60 * minute;
        setTime(totalTime);
    }

    function formatTwoDigits(number) {
        return ((number < 10) ? '0' + number : number);
    }

    const handleTimeChange = () => {
        console.log("focus");
        console.log(time);
        setActive(!active);
    }

    const handleTimerSet = (event) => {
        console.log(event.target.value);
        setTimerSet(event.target.value);
        setTimeFormated(event.target.value);
    }

    const formatWhenLoseFocus = () =>{
        console.log('lose focus');
    }

    // const emptyValue = () => {
    //     setHour('');
    //     console.log('on focus');
    // }

    return (
        <div className="timer" >
                <NumberFormat format="##:##:##"
                              mask="_"
                              allowEmptyFormatting
                              isNumericString={true}
                              onChange={handleTimerSet}
                              className="clockDigits"
                              onBlur={formatWhenLoseFocus}
                              value={timeFormated}
                />
        </div>
    )
    /*
    return (
        <div >
            { !active ?
                <div  onClick={handleTimeChange} style={{border:"2x solid black"}}>
                    <p> not running</p>
                    <h1 className="timeset-wrapper">
                        <div className="clockDigits"> {formatTwoDigits(moment.duration(time, unit).hours())}  </div> :
                        <div className="clockDigits"> {formatTwoDigits(moment.duration(time, unit).minutes())} </div> :
                        <div className="clockDigits"> {formatTwoDigits(moment.duration(time, unit).seconds())} </div>
                    </h1>
                </div>
                :
                <div  style={{border:"2x solid black"}}>
                    <p>editing</p>

                    <h1 className="timeset-wrapper">
                        <div className="clockDigits">
                            {formatTwoDigits(moment.duration(time, unit).hours())}
                        </div> :
                        <div className="clockDigits"> {formatTwoDigits(moment.duration(time, unit).minutes())} </div>:
                        <div className="clockDigits"> {formatTwoDigits(moment.duration(time, unit).seconds())} </div>
                    </h1>
                </div>
            }
        </div>

    )
    *
     */
};

export default Timer
