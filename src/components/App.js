import React, { useState, useEffect, useRef } from 'react'

import { useInterval } from '../hooks/useInterval'

import TimeSet from './TimeSet'
import Timer from './Timer'
import Controls from './Controls'

import alarm from '../sounds/alarm.mp3'

const App = () => {
  const [breakVal, setBreakVal] = useState(0)
  const [sessionMinutes, setSessionMinutes] = useState(0)
  const [sessionHours, setsessionHours] = useState(0)
  const [sessionVal, setSessionVal] = useState(25)
  const [mode, setMode] = useState('session')
  const [time, setTime] = useState(0)
  const [active, setActive] = useState(false)
  useRef();

  useInterval(() => setTime(time - 1000), active ? 1000 : null)

  useEffect(() => {
    setTime(sessionVal * 60 * 1000)
  }, [sessionVal])

  useEffect(() => {
    if (time === 0 && mode === 'session') {
      setMode('break')
      setTime(breakVal * 60 * 1000)
    } else if (time === 0 && mode === 'break') {
      setMode('session')
      setTime(sessionVal * 60 * 1000)
    }
  }, [time, breakVal, sessionVal, mode])

  const handleReset = () => {
    setActive(false)
    setMode('session')
    setBreakVal(5)
    setSessionVal(25)
    setTime(25 * 60 * 1000)
  }

  return (
    <div className="container">
      <header>
        <h1>Pomodoro Clock</h1>
      </header>
      <main>
        <div className="time-wrapper">
          <Timer currentMode={[mode, setMode]} currentTime={[time, setTime]} />
          <Controls
            activeStatus={[active, setActive]}
            handleReset={handleReset}
          />
        </div>
        <div className="timeset-wrapper">
          {/*<TimeSet type={'Break'} value={[breakVal, setBreakVal]} />*/}
          <TimeSet type={'Session'} value={[sessionVal, setSessionVal]} />
        </div>
      </main>
    </div>
  )
}

export default App
