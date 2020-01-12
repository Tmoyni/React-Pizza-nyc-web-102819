import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

 
  render() {
    let pizzasArray = this.props.allPizzas.map( pizzaObj => 
      <Pizza pizzaObj={pizzaObj} handleEditClick={this.props.handleEditClick} key={pizzaObj.id} />
    )

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
           {pizzasArray} 
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
