import React from 'react';


class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      local: props.local ? props.local : "America/Fortaleza",
      date: null
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      2000
    );
  }

  tick() {
    let {local} = this.state;
    let url = "http://worldtimeapi.org/api/timezone/" + local;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.datetime);
        this.setState({
          isLoaded: true,
          date: result.datetime
        });
      },
      // Nota: É importante lidar com os erros aqui
      // em vez de um bloco catch() para não recebermos
      // exceções de erros dos componentes.
      (error) => {
        this.setState({
          isLoaded: false,
          date: null,
          error
        });
      }
    )
}

  render() {
    let {isLoaded, date, error, local} = this.state;
    if (error) {
      return (<div>
        <h2>World clock :/ ({error.message})</h2>
      </div>)
    } else if (!isLoaded) {
      return (<div>
        <h2>World clock is loading...</h2>
      </div>)
    } else {
      return (
        <div>
          <h2>{local ? local : "World clock"} is {date}.</h2>
        </div>
      );
    }
  }
}

export default WorldClock;