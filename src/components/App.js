import React, {useState, useEffect, useRef} from 'react'

import {useInterval} from '../hooks/useInterval'

import TimeSet from './TimeSet'
import Timer from './Timer'
import Controls from './Controls'
import axios from 'axios';
import moment from "moment";


const App = () => {
    const [breakVal, setBreakVal] = useState(0);
    const [sessionVal, setSessionVal] = useState(0);
    const [mode, setMode] = useState('session');
    const [time, setTime] = useState(60);
    const [active, setActive] = useState(false);
    const [task, setTask] = useState('task from react');
    const [distractions, setDistractions] = useState('distractions from react');
    const [distractionsCounter, setDistractionsCounter] = useState(0);
    const [beginRest, setBeginRest] = useState(0);
    const [endPomorodo, setEndPomorodo] = useState(0);
    useRef();

    useInterval(() => setTime(time - 1), active ? 1000 : null)

    useEffect(() => {
        setTime(sessionVal)
        console.log("time and session value", time, sessionVal);
    }, [sessionVal])
    //
    // useEffect(() => {
    //   if (time === 0 && mode === 'session') {
    //     setMode('break')
    //     setTime(breakVal * 60 * 1000)
    //   } else if (time === 0 && mode === 'break') {
    //     setMode('session')
    //     setTime(sessionVal * 60 * 1000)
    //   }
    // }, [time, breakVal, sessionVal, mode])

    const handleReset = () => {
        setActive(false)
        setMode('session')
        setBreakVal(0)
        setSessionVal(0)
    };

    const handleSubmit = () => {
        console.log(time);
        let beginWork = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        let beginRest = moment(beginWork).add(time, 'seconds').format("YYYY-MM-DD HH:mm:ss");
        let endPomodoro = moment(beginRest).add(breakVal, 'seconds').format("YYYY-MM-DD HH:mm:ss");
        let pomodori = {
            "task": task,
            "distractions": distractions,
            "distractions_counter": distractionsCounter,
            "beginWork": beginWork,
            "beginRest": beginRest,
            "endPomodoro": endPomodoro
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
            <header>
                <h1>Pomodoro Clock</h1>
            </header>
            <main>
                <div className="time-wrapper">
                    <Timer currentMode={[mode, setMode]} currentTime={[time, setTime]}/>
                    <Controls
                        activeStatus={[active, setActive]}
                        handleReset={handleReset}
                    />
                </div>
                <div className="timeset-wrapper">
                    <TimeSet type={'Break'} value={[breakVal, setBreakVal]}/>
                    <TimeSet type={'Session'} value={[sessionVal, setSessionVal]}/>
                </div>
                <label>
                    Task
                </label>
                <input type="text" name={task} onChange={e => setTask(e.target.value)} placeholder={"Task"}/>
                <label>
                    Distractions
                </label>
                <input type="text" name={distractions} onChange={e => setDistractions(e.target.value)}
                       placeholder={"Distractions"}/>
                <label>
                    Distractions Counter
                </label>
                <input type="text" name={distractionsCounter} onChange={e => setDistractions(e.target.value)}
                       placeholder={"Distractions"}/>
                <input type="submit" onClick={handleSubmit}/>
            </main>
        </div>
    )
};

export default App
