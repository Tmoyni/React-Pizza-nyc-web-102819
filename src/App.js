import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'


class App extends Component {
  
  state = {
    allPizzas: [],
    pizzaToEdit: "",
    topping: "",
    size: "",
    veg: null,
    id: ""
  }


  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(pizzas => {
        this.setState({
          allPizzas: pizzas
        })
      }
        )
  }

  handleEditClick = (pizzaObj) => {
    this.setState ({
      pizzaToEdit: pizzaObj,
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      veg: pizzaObj.vegetarian,
      id: pizzaObj.id
    }) 
  }

  handleSubmit = (props) => {
    fetch(`http://localhost:3000/pizzas/${props.id}`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topping: `${props.topping}`,
      size: `${props.size}`,
      vegetarian: `${props.veg}`
    }),
    })
    .then(() => fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => {
      this.setState({
        allPizzas: pizzas
      })
    }
      ))
  }

  updateTopping = (e) => {
    this.setState ({
      topping: e.target.value
    })
  }

  updateSize = (e) => {
    this.setState ({
      size: e.target.value
    })
  }
  
  updateVeg = (e) => {
    this.setState ({
      veg: true
    })
  }

  updateUnVeg = (e) => {
    this.setState ({
      veg: false
    })
  }

  render() {

    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizzaToEdit={this.state.pizzaToEdit}
          handleSubmit={this.handleSubmit}
          updateTopping={this.updateTopping}
          updateSize={this.updateSize}
          updateUnVeg={this.updateUnVeg}
          updateVeg={this.updateVeg}
          topping={this.state.topping}
          size={this.state.size}
          veg={this.state.veg}
          id={this.state.id}
        />
        <PizzaList
          allPizzas={this.state.allPizzas}
          handleEditClick={this.handleEditClick}
        />
      </Fragment>
    );
  }
}

export default App;
