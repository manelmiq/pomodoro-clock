import React from 'react'
import moment from 'moment'

const Timer = ({currentTime, label}) => {
    const [time] = currentTime;
    const [unit] = 'seconds';
    return (
        <div>
            <h2 id="timer-label">{label}</h2>
            <div>
                <h3 id="time-left">
                    {moment.duration(time, unit).hours()}
                    :{moment.duration(time, unit).minutes()}
                    :{moment.duration(time, unit).seconds()}
                </h3>
            </div>
        </div>
    )
};

export default Timer
