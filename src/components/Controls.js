import React from 'react'

const Controls = ({ activeStatus, handleReset }) => {
  const [active, setActive] = activeStatus;
  return (
    <div className="controls-wrapper">
      <button id="start_stop" onClick={() => setActive(!active)}>
        { active ? <button className="btn btn-success">Start</button>
                : <button className="btn btn-light">Stop</button>        }
      </button>
      <button id="reset" onClick={handleReset} className="btn btn-light" >
       Reset
      </button>
    </div>
  )
}

export default Controls
