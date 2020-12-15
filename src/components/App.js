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
        if (time > 0) {
            setTime(time - 1);
        }
        if(breakTime > 0){
            setBreakTime(breakTime - 1);
        }
    }, active ? 10 : null);

    useEffect(() => {
        setTime(sessionVal);
        console.log("time and session value", time, sessionVal);
    }, [sessionVal]);


    const handleReset = () => {
        setActive(false)
        setMode('session')
        setBreakTime(0)
        setSessionVal(0)
    };

    const handleSubmit = () => {
        console.log(time);
        let beginWork = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        let beginRest = moment(beginWork).add(time, 'seconds').format("YYYY-MM-DD HH:mm:ss");
        let endPomodoro = moment(beginRest).add(breakTime, 'seconds').format("YYYY-MM-DD HH:mm:ss");
        let pomodori = {
            "task": task,
            "distractionsDescription": distractions,
            "distractionsCounter": distractionsCounter,
            "description": description,
            "beginWork": beginWork,
            "beginRest": beginRest,
            "endPomodori": endPomodoro
        };
        console.log(pomodori);
        axios
            .post('http://localhost:8080/pomodori', pomodori)
            .then(
                response => {
                    console.log(response);
                    console.log(response.data);
                }
            );
    };
    return (
        <div className="container">
            <div className="row">
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
                <div className="col-sm-6">
                    <div>
                        <Timer id={"work"} currentTime={[time, setTime]} />
                        <Timer id={"restTime"} currentTime={[breakTime, setBreakTime]} />
                        {/*<TimeSet type={'Work time'} value={[sessionVal, setSessionVal]}/>*/}
                        {/*<TimeSet type={'Break time'} value={[breakTime, setBreakTime]}/>*/}
                    </div>
                    <Controls
                        activeStatus={[active, setActive]}
                        handleReset={handleReset}
                    />
                </div>
            </div>
        </div>
    )
};

export default App
