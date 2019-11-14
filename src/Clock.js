import React from "react";

export default class Clock extends React.Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    console.log("starting interval");
    this.startClock();
  }

  startClock = () => {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  };

  tick = () => {
    this.setState({ date: new Date() });
  };

  componentWillUnmount() {
    console.log("clearing interval");
    clearInterval(this.interval);
  }

  render() {
    console.log("rendering clock");
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
