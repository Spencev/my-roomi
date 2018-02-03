import React, { Component } from "react";

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [] // stores input items
    };

    this.addItem = this.addItem.bind(this);
  }
  // addItem event handler
  addItem(e) {
    const itemArray = this.state.items; // may need to be var or let

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      // sets the state's items property to the value of itemArray
      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

    console.log(itemArray);

    // blocks default reloading behaviour
    e.preventDefault();
  }
	render() {
   	return (
      <div className="todoListMain">
        <div className = "header">
			    <form onSubmit={this.addItem}>
            {/* stores reference to input element */}
				    <input ref={(a) => this._inputElement = a} 
              placeholder="enter task">
					  </input>
					  <button type="submit">add</button>
					</form>
				</div>
		  </div>
    );
  }
}

export default TodoList;
