import React, { Component } from 'react';
import '../css/ToDoList.css';

class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typedText: '',
            toDoListArr: [{taskName: 'aaaa', isDone: false}, {taskName: 'bbbbbbb', isDone: false},{taskName: 'cccccccc', isDone: false}, ],
            // isDone: false
        }

    }

    toggleChange = (index) => {

        this.setState({
            isDone: this.state.toDoListArr[index].isDone = true
        });
    };

    handleChange = (event) => {
        this.setState({typedText: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // if (this.state.typedText) {
        //
        //     this.setState({
        //         toDoListArr: [...this.state.toDoListArr, this.state.typedText]
        //     });
        //
        //     this.setState({typedText: ''});
        // }

        if (this.state.typedText === '') {
            alert('Input Field Empty');
        }else{
            if (this.state.typedText !== '') {

                this.setState({
                    toDoListArr: [...this.state.toDoListArr, { taskName: this.state.typedText, isDone: false }]
                });

                this.setState({typedText: ''});
            }
        }
    };

    handleAll  = () => {
        console.log( 'all' );
    };

    handleActive  = () => {
        console.log( 'active' );
    };

    handleCompleted  = () => {
        console.log( 'completed' );
    };

    handleClearCompleted  = () => {
        console.log( 'clear' );
    };



    handleDeleteToDoItem = (index) => {
        this.state.toDoListArr.splice(index, 1);
        this.setState({toDoListArr: this.state.toDoListArr});
    };

    render() {
        return (
            <div className="tdl-app">
                <div className="tdl-header">
                    <h1>To Do List React</h1>
                </div>

                <div className="tdl-add">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="What needs to be done?" type="text" value={this.state.typedText} onChange={this.handleChange} />
                        <button className="add" value="add">Add</button>
                    </form>
                </div>

                <div className="tdl-button">
                    <button className="tdl-button-view" onClick={ () => this.handleAll() }>All</button>
                    <button className="tdl-button-view" onClick={ () => this.handleActive() }>Active</button>
                    <button className="tdl-button-view" onClick={ () => this.handleCompleted() }>Completed</button>
                    <button className="tdl-button-view" onClick={ () => this.handleClearCompleted() }>Clear completed</button>
                </div>


                <div className="tdl-view">
                    {
                        this.state.toDoListArr.map( (item, index) => (
                                <div className="tdl-view-item" key={index} id={index}>
                                    <input className="toggle" type="checkbox" checked={item.isDone} onChange={() => this.toggleChange(index)} />
                                    {item.taskName}
                                    <button className="tdl-butt-destroy-item" onClick={ () => this.handleDeleteToDoItem(index) }>Delete</button>
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        );
    }
}


export default ToDo;


