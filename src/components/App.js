import React, {useState, useEffect, useRef} from 'react'

import {useInterval} from '../hooks/useInterval'
import 'bootstrap/dist/css/bootstrap.min.css';

import TimeSet from './TimeSet'
import Timer from './Timer'
import Controls from './Controls'
import axios from 'axios';
import moment from "moment";


const App = () => {
    const [breakTime, setBreakTime] = useState(25);
    const [sessionVal, setSessionVal] = useState(0);
    const [mode, setMode] = useState('session');
    const [time, setTime] = useState(60);
    const [active, setActive] = useState(false);
    const [task, setTask] = useState('task from react');
    const [distractions, setDistractions] = useState('distractions from react');
    const [distractionsCounter, setDistractionsCounter] = useState(0);
    const [description, setDescription] = useState('description from pomodoro');

    useRef();

    useInterval(() => {
        if (mode === 'session') {
            if (time > 0) {
                setTime(time - 1);
            }else{
                setMode('break');
            }
        } else {
            if (breakTime > 0) {
                setBreakTime(breakTime - 1);
            }
        }
    }, active ? 10 : null);

    useEffect(() => {
        console.log('set time');
        setTime(sessionVal);
    }, [sessionVal]);


    const handleReset = () => {
        setActive(false);
        setMode('session');
        setBreakTime(0);
        setSessionVal(0);
        setTime(0);
    };

    const handleSubmit = () => {
        const dateFormatString = "YYYY-MM-DD HH:mm:ss";
        let beginWork = moment(new Date())
            .format(dateFormatString);
        let beginRest = moment(beginWork)
            .add(time, 'seconds')
            .format(dateFormatString);
        let endPomodoro = moment(beginRest)
            .add(breakTime, 'seconds')
            .format(dateFormatString);

        let pomodori = {
            "task": task,
            "distractionsDescription": distractions,
            "distractionsCounter": distractionsCounter,
            "description": description,
            "beginWork": beginWork,
            "beginRest": beginRest,
            "endPomodori": endPomodoro
        };
        axios
            .post('http://localhost:8080/pomodori', pomodori)
            .then(
                response => {
                }
            );
    };
    return (
        <div className="container">
            <div className="row w-100" >
                {/*<div className="col-sm-6">*/}
                {/*    <label>*/}
                {/*        Task*/}
                {/*    </label>*/}
                {/*    <input className="form-control" type="text" name={task} onChange={e => setTask(e.target.value)}*/}
                {/*           placeholder={"Task"}/>*/}
                {/*    <label>*/}
                {/*        Description*/}
                {/*    </label>*/}
                {/*    <input className="form-control" type="text" name={description}*/}
                {/*           onChange={e => setDescription(e.target.value)} placeholder={"Description"}/>*/}
                {/*    <label>*/}
                {/*        Distractions*/}
                {/*    </label>*/}
                {/*    <input className="form-control" type="text" name={distractions}*/}
                {/*           onChange={e => setDistractions(e.target.value)}*/}
                {/*           placeholder={"Distractions"}/>*/}
                {/*    <label>*/}
                {/*        Distractions Counter*/}
                {/*    </label>*/}
                {/*    <input className="form-control" type="text" name={distractionsCounter}*/}
                {/*           onChange={e => setDistractionsCounter(e.target.value)}*/}
                {/*           placeholder={"Distractions"}/>*/}
                {/*    <input type="submit" className="btn btn-info" onClick={handleSubmit}/>*/}
                {/*</div>*/}
                <div className="col-sm-8" >
                    <div className="text-center">
                        <Timer id={"work"} currentTime={[time, setTime]} />
                        <Timer id={"restTime"} currentTime={[breakTime, setBreakTime]} />
                    </div>
                </div>
                <div className="col-sm-4" >
                    <div className="float-left">
                        <TimeSet value={[time, setTime]} />
                        <TimeSet value={[breakTime, setBreakTime]} />
                    </div>
                </div>
            </div>
            <div className="row">
                    <Controls
                        activeStatus={[active, setActive]}
                        handleReset={handleReset}
                    />
            </div>
        </div>
    )
};

export default App
