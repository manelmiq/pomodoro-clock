import React, {useRef, useState, useEffect} from 'react';

const TimeSet = ({type, value}) => {
    const [val, setVal] = value;
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const handleChanges = (e, type) => {
        console.log(val + " =>" + hours + ":" + minutes);
        console.log(typeof hours + " type of hours" + hours);
        console.log(typeof minutes + "type of minutes" + minutes);
        console.log(typeof val + "type of val" + val);
        if (type === 'minutes') {
            console.log('minutes');
            setMinutes(e);
            console.log(minutes);
        } else {
            console.log('hours');
            setHours(e);
            console.log(hours);
        }
        let time = hours * 60 + minutes;
        console.log(time);
        setVal(time*1000);
        console.log(val + " =>" + hours + ":" + minutes);
    };
    return (
        <div className="control">
            <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>
            <span>Minutes</span>
            <input type="text" onChange={e => handleChanges(e.target.value, 'minutes')}/>
            <span>Hours</span>
            <input type="text" onChange={(e) => handleChanges(e.target.value, 'hours')}/>
        </div>
    )
}

export default TimeSet
