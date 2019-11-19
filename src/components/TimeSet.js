import React, {useState, useEffect} from 'react';
import NumericInput from 'react-numeric-input';


const TimeSet = ({type, value}) => {
    const [val, setVal] = value;
    const [state, setState] = React.useState({
        minutes: 0,
        hours: 0
    });

    useEffect(() => {
        setVal((parseInt(state.minutes) + parseInt(state.hours ) * 60 )*60);
    }, [state.minutes, state.hours]);

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    return (
        <div className="control">
            <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>
            <span>Minutes</span>
            <input type="number"  value={state.minutes} name="minutes" onChange={handleChange} min="0" max="59"/>
            <span>Hours</span>
            <input type="number" value={state.hours} name="hours" onChange={handleChange} min="0" max="8"/>
        </div>
    )
};

export default TimeSet
