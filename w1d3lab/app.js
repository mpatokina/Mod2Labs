
class Tardis extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
            }
          }
    }
    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: text.toLowerCase(),   
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() {
        return(
            <div>
             <div>
                <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
                <DivOne tardis1={ this.state.tardis } changeItOne={ this.changeIt }/>

            </div>
            </div>
        )
    }
}

class DivOne extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return( 
        <div>
         <h3 onClick= { () => this.props.changeItOne (this.props.tardis1.name)}>{this.props.tardis1.name}</h3>
        </div>
        )
        }   
    }



ReactDOM.render(<Tardis />, document.getElementById('container'));