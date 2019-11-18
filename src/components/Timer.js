import React from 'react'
import moment from 'moment'
import momentoFormat from 'moment-duration-format'

const Timer = ({currentMode, currentTime}) => {
    const [mode] = currentMode;
    const [time] = currentTime;
    return (
        <>
            <h2 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h2>
            <h3 id="time-left">
                {
                    moment.duration(time, "minutes").format("hh:mm")
                }
            </h3>
        </>
    )
};

export default Timer
