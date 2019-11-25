import React from 'react'
import moment from 'moment'

const Timer = ({currentMode, currentTime, currentBreakTime}) => {
    const [mode] = currentMode;
    const [time] = currentTime;
    const [breakTime] = currentBreakTime;
    const [unit] = 'seconds';
    return (
        <>
            <h2 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h2>
            <h3 id="time-left">
                {moment.duration(time, unit).hours()}
                :{moment.duration(time, unit).minutes()}
                :{moment.duration(time, unit).seconds()}</h3>
            <h3 id="time-left">
                {moment.duration(breakTime, unit).hours()}
                :{moment.duration(breakTime, unit).minutes()}
                :{moment.duration(breakTime, unit).seconds()}</h3>
        </>
    )
};

export default Timer
