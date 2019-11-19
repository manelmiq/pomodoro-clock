import React, {useState, useEffect} from 'react';
import moment, {min} from "moment";


const TimeSet = ({type, value}) => {
    const [val, setVal] = value;
    const [state, setState] = React.useState({
        minutes: 0,
        hours: 0
    });

    useEffect(() => {
        console.log(state);
        setVal(parseInt(state.minutes) + parseInt(state.hours ) * 60);
        console.log("value ", val);
        console.log('render minutes');
    }, [state.minutes, state.hours]);

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
        console.log('new state');
        setVal(parseInt(state.minutes)  + (parseInt(state.hours)*60) * 1000);
    }

    return (
        <div className="control">
            <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>
            <span>Minutes</span>
            <input type="text" value={state.minutes} name="minutes" onChange={handleChange}/>
            <span>Hours</span>
            <input type="text" value={state.hours} name="hours" onChange={handleChange}/>
        </div>
    )
};

export default TimeSet
