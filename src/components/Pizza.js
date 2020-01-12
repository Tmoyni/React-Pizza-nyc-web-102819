import React from "react"

class Pizza extends React.Component {
  render() {

    
    
    return(
      <tr>
        <td>{this.props.pizzaObj.topping}</td>
        <td>{this.props.pizzaObj.size}</td>
        <td>{this.props.pizzaObj.vegetarian ? "UnMeats" : "Meats"}</td>
        <td><button type="button" className="btn btn-primary" onClick={() => this.props.handleEditClick(this.props.pizzaObj)}>Edit Pizza</button></td>
      </tr>
    )

  }
}

export default Pizza
