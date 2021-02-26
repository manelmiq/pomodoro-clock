import React, { useEffect} from 'react';
import moment from "moment";

const TimeSet = ({type, value}) => {
    const [val, setVal] = value;
    const [timeObj, setTimeObj] = React.useState({
        minutes: 0,
        hours: 0
    });

    useEffect(() => {

        let newVal = (parseInt(timeObj.minutes) + parseInt(timeObj.hours) * 60) * 60;
        if(isNaN(newVal)){
            newVal = '';
        }
        setVal(newVal);

    }, [timeObj.minutes, timeObj.hours]);


    function formatTwoDigits(number) {
        return ((number < 10) ? '0' + number : number);
    }



    const handleChange = (evt)=> {
        const fieldValue = evt.target.value;
        const fieldUnit = evt.target.name;
        console.log(value);
        console.log('changing ' + evt.target.name);
        setTimeObj({
            ...timeObj,
            [fieldUnit]: fieldValue
        });
    }

    return (
        <h1 className="timeset-wrapper">


            <input type="number"
                   value={timeObj.hours} name="hours"
                   onChange={handleChange}
                   min="0" max="8"
                   className="clockDigits"/>:
            <input type="number" value={timeObj.minutes} name="minutes" onChange={handleChange} min="0" max="59" className="clockDigits"/>: 00
        </h1>
    )
};

export default TimeSet
