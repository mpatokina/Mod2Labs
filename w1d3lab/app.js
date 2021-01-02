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
         <div onClick={ this.changeFormat } className="tardis-component">
            <h1>{ this.state.string }</h1>
          </div>    
         )
        }
}
class Final extends React.Component {
  render() {
    return (
      <div> 
        <div>
          <div>
                <Tardis />              
                <Tardis />
          </div>
        </div>
      </div>
    )
  }
}    
    
ReactDOM.render(<Final />, document.getElementById('container'));