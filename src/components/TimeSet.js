import React, { useEffect} from 'react';

const TimeSet = ({type, value}) => {
    const [val, setVal] = value;
    const [state, setState] = React.useState({
        minutes: 0,
        hours: 0
    });

    useEffect(() => {

        let newVal = (parseInt(state.minutes) + parseInt(state.hours) * 60) * 60;
        if(isNaN(newVal)){
            newVal = '';
        }
        setVal(newVal);

    }, [state.minutes, state.hours]);

    function handleChange(evt) {
        const value = evt.target.value;
        console.log(value);
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    return (
        <div className="control">
            <h4 id={`${type.toLowerCase()}-label`}>{type} </h4>
            <span>Minutes</span>
            <input type="number" value={state.minutes} name="minutes" onChange={handleChange} min="0" max="59"/>
            <span>Hours</span>
            <input type="number" value={state.hours} name="hours" onChange={handleChange} min="0" max="8"/>
        </div>
    )
};

export default TimeSet
