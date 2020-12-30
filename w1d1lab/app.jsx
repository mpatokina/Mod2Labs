class Header extends React.Component {
    render() {
      return (
        <h1>React Tac Toe</h1>
      )
    }
  }
  class PlayerX extends React.Component {
    render() {
      return (
        <div className='X'>
          <h2>Player X</h2>
          <h3>Wins: </h3>
        </div>
      )
    }
  }
  class PlayerO extends React.Component {
    render() {
      return (
        <div className='O'>
          <h2>Player O</h2>
          <h3>Wins: </h3>
        </div>
      )
    }
  }

  // our first component
  class Board extends React.Component {
    render () {
      return (
        <div className='board'>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      )
    }
  }
  class Square extends React.Component {
    render () {
      return (
        <div>
          <h4>square</h4>
        </div>
      )
    }
  }

  class App extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <PlayerX />
          <PlayerO />
          <Board />
        </div>
      )
    }
  }

  ReactDOM.render( <App />, document.getElementById('container') );

  