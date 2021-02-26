import React from "react";


class TimerList extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          listTimer: []
      };
      this.setPreTimer = this.setPreTimer.bind(this);
  }

  componentDidMount() {
      this.setState({
          listTimer: [
              {
              timeToWork : 10,
              timeToRest: 5
          },
              {
                  timeToWork : 15,
                  timeToRest: 3
              }

          ]
      })
  }

  setPreTimer(timeSet) {
      console.log(timeSet);
      this.props.setPreTimer(timeSet);
  }

    render(){
      return(
          <div >
              Work Rest
              {
                  this.state.listTimer.map((timerSet, index) => {
                      return <div key={index} onClick={() => this.setPreTimer(timerSet)} className="preTimeSet">
                          <button className="btn btn-success">
                              {timerSet.timeToWork}
                          </button>
                          <button className="btn btn-danger">
                              {timerSet.timeToRest}
                          </button>

                      </div>
                  })
              }
          </div>
      );
  }
}

export default TimerList;