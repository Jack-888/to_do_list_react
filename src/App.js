import React, { Component } from 'react';

import ToDo from './toDoListComponents/ToDoList';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<h1>To do list</h1>*/}
                <ToDo />
            </div>
        );
    }
}

export default App;
