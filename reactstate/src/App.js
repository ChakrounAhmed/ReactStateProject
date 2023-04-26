import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: `Ahmed CHAKROUN`,
      bio: `I am a highly motivated professional with 2 years of experience in web developement.
       Skilled in React js , I am dedicated to delivering high-quality work and driving business success.`,
      imgSrc: "/pic.jpg",
      profession: `React js Developer`,
      show: false,
      elapsedTime: 0,
    };
  }

  handleClick = () => {
    this.componentDidMount();
  };

  componentDidMount() {
    this.startTime = new Date().getTime();

    // Update elapsed time every second
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTimeInSeconds = Math.floor(
        (currentTime - this.startTime) / 1000
      );
      this.setState({ elapsedTime: elapsedTimeInSeconds });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  show = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App-header">
        <h1>ReactProject</h1>
        {this.state.show ? (
          <div>
            <h2>{this.state.fullName}</h2>
            <img src={this.state.imgSrc} alt="pic" />
            <h3>{this.state.bio}</h3>

            <h5>{this.state.profession}</h5>
          </div>
        ) : null}
        <button
          onClick={() => {
            this.show();
            this.handleClick();
          }}
        >
          showMe!
        </button>
        <p>{this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
