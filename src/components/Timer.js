import React , {useEffect} from 'react'
import moment from 'moment'

const Timer = ({currentMode, currentTime}) => {
    const [mode] = currentMode;
    const [time] = currentTime;


    useEffect(() => {
        console.log('time has changed', time);
    }, [time]);

    return (
        <>
            <h2 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h2>
            <h3 id="time-left">
                {moment.duration(time, 'minutes').hours()}
                :{moment.duration(time, 'minutes').minutes()}
                :{moment.duration(time, 'minutes').seconds()}</h3>
        </>
    )
};

export default Timer
