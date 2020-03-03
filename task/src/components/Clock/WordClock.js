import React from 'react';


class WordlClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
    this.state = {date: new Date};
  }

  render() {
    let {isLoaded, date} = this.state;
    if (!isLoaded){
      return (
        <div>
          <h2>Loading...</h2>         
        </div>
      )
    }
    else{
    return (
      <div>
        <h2>World's clock is {date.toLocaleTimeString()}.</h2>
        
      </div>
    );
    }
  }
}

export default WordlClock;
