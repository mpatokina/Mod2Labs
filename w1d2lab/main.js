const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: false
}


class App extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            
        stateReceipts: [receipt1, receipt2, receipt3]
    

        }
    }
    componentDidMount() {
        console.log(this.state.stateReceipts);
    }
     
   
render() {
    return (
        <div>
            <h1>Korrila</h1>
            <ul>
                {
                    this.state.stateReceipts.map((item => <li> 
                    { item.paid ? '' : <h2> { item.person } </h2> }
                    { item.paid ? '' : <h5><span> main: </span> { item.order.main } </h5>} 
                    { item.paid ? '' : <h5><span> protein: </span> { item.order.protein } </h5>}
                    { item.paid ? '' : <h5><span> rice: </span> { item.order.rice } </h5>}
                    { item.paid ? '' : <h5><span> sauce: </span> { item.order.sauce } </h5>}
                    { item.paid ? '' : <h5><span> drink: </span> { item.order.drink } </h5>}
                    { item.paid ? '' : <h5><span> cost: </span> { item.order.cost } </h5>}
                    <br />
                    </li>))
                }
            </ul>
        </div>
    )
}
}

ReactDOM.render(<App />,document.getElementById('container'));