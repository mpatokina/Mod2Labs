class Tardis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCased: false,
      string: 'Time and Relative Dimension in Space'
    }
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat() {
    if(!this.state.isCased) {
      this.setState({ string: this.state.string.toUpperCase(), isCased: !this.state.isCased })
    } else {
      this.setState({ string: this.state.string.toLowerCase(), isCased: !this.state.isCased })
    }
  }
  render() {
    return (
      <div>
        <div>
          <div onClick={ this.changeFormat } className="tardis-component">
            <div>
              <h1>{ this.state.string }</h1>
            </div>
            <Tardis1 />
          </div>
        </div>
      </div>
    )
  }
}

class Tardis1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCased1: false,
            string1: 'Time and Relative Dimension in Space'
        }
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeFormat() {
        if(!this.state.isCased1) {
          this.setState({ string1: this.state.string1.toUpperCase(), isCased1: !this.state.isCased1 })
        } else {
          this.setState({ string1: this.state.string1.toLowerCase(), isCased1: !this.state.isCased1 })
        }
      }
      render() {
        return (
          <div onClick={ this.changeFormat } className="tardis-component1">
            <h1>{ this.state.string1 }</h1>
          </div>
        )
      }
    }
    
ReactDOM.render(<Tardis />, document.getElementById('container'));