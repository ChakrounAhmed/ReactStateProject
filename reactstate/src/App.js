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
      timeSinceMount: 0,
    };
  }

  handleClick = () => {
    this.setState({ timeSinceMount: 0 }); // initialize state of our counter
    clearInterval(this.interval); // clear the interval timer created by setInterval() method
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  };

  show = () => {
    console.log();
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
        <p>{this.state.timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
