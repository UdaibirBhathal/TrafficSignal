import React from 'react';
import './TrafficSignal.css'; // Optional: styles for the lights

class TrafficSignal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLight: 'red',
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeLight, 2000); // change every 2 sec
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeLight = () => {
    this.setState((prevState) => {
      switch (prevState.currentLight) {
        case 'red':
          return { currentLight: 'green' };
        case 'green':
          return { currentLight: 'yellow' };
        case 'yellow':
          return { currentLight: 'red' };
        default:
          return { currentLight: 'red' };
      }
    });
  };

  render() {
    const { currentLight } = this.state;

    return (
      <div className="traffic-signal">
        <div className={`light red ${currentLight === 'red' ? 'active' : ''}`} />
        <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`} />
        <div className={`light green ${currentLight === 'green' ? 'active' : ''}`} />
      </div>
    );
  }
}

export default TrafficSignal;

