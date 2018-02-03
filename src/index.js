import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './TodoList.js';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div className="reactdom">
        <div className="listOne">
            <p>Noah</p>
            <TodoList/>
        </div>
        <div className="listTwo">
            <p>Spencer</p>
            <TodoList/>
        </div>
        <div className="listThree">
            <p>Tiffany</p>
            <TodoList/>
        </div>
    </div>,
    destination
);

registerServiceWorker();
