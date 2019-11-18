import React, {useState, useEffect} from 'react';
import moment from "moment";

const TimeSet = ({type, value}) => {
    const [val, setVal] = value;
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const handleChanges = (e, type) => {
        e = parseInt(e, 10);
        if(isNaN(e)){
            console.log(typeof e)
            return;
        }
        if (type === 1) {
            setMinutes(e);
        } else {
            setHours(e);
        }
        console.log(minutes);
        console.log(hours);
        if(!isNaN(hours)){
            setHours(0);
        }
        if(!isNaN(minutes)){
            setHours(0);
        }
        let newTime = parseInt(hours * 60 + minutes, 10);
        console.log("setting timer " + newTime);
        setVal(newTime);
    };
    useEffect(() => {
        console.log('Do something after counter has changed', minutes , hours, val);
    }, [minutes, hours, val]);

    return (
        <div className="control">
            <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>
            <span>Minutes</span>
            <input type="text" onChange={e => handleChanges(e.target.value, 1)}/>
            {/*<span>Hours</span>*/}
            {/*<input type="text" onChange={(e) => handleChanges(e.target.value, 2)}/>*/}
        </div>
    )
}

export default TimeSet
