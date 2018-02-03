import React, { Component } from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    // delete item event handler
    return <li onClick={() => this.delete(item.key)}
        key={item.key}>{item.text}</li>
  }

  delete(key) {
    // calls the delete function
    this.props.delete(key);
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    
    return (
      <div>
        <ul className="theList">
          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
};

export default TodoItems;