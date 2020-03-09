import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './Todo.css'

const data = []

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data,
      task: '',
      id: data.length,
      completed: false
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleCompleted = clicked => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === clicked) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  deleteCompleted = () => {
    this.setState({
      data: this.state.data.filter(item => item.completed === false)
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: this.state.data.length + 1,
      completed: false
    };
    this.setState({
      data: [...this.state.data, newItem]
    })
  }

  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm data={this.state} deleteCompleted={this.deleteCompleted} addItem={this.addItem} />
        <TodoList toggleCompleted={this.toggleCompleted} data={this.state.data} />
      </div>
    );
  }
}

export default App;
