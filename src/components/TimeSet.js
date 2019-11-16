import React from 'react'

const TimeSet = ({type, minutes, hours}) => {
    const [minutes, setMinutes] = minutes;
    const [hours, setHours] = hours;
    const [val, setVal] = val;
    const handleIncrement = () => {
        if (val >= 60) {
            return null
        } else {
            setVal(val + 1)
        }
    };
    const handleDecrement = () => {
        if (val === 1) {
            return null
        } else {
            setVal(val - 1)
        }
    };
    return (
        <div class="control">
            <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>
            <div>
                <span>Hours</span>
                <input type="text" onChange={(e) => setVal(e.target.value)}/>
                <span>Minutes</span>
                {/*<input type="text" onChange={(e) => setVal(e.target.value)}/>*/}
            </div>
            <button id={`${type.toLowerCase()}-increment`} onClick={handleIncrement}>
                &uarr;
            </button>
            <h3 id={`${type.toLowerCase()}-length`}>{val}</h3>
            <button id={`${type.toLowerCase()}-decrement`} onClick={handleDecrement}>
                &darr;
            </button>
        </div>
    )
}

export default TimeSet
