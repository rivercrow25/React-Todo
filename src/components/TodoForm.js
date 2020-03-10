import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }



    handleSubmit = event => {
        event.preventDefault()
        this.props.addItem(this.state.name)
        this.setState({
            name: ''
        })
        localStorage.setItem('data', JSON.stringify(this.props.data))
    }

    handleCompleted = () => {
        this.props.deleteCompleted()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name='add-todo' value={this.state.name} />
                <button type='submit'>Add Todo</button>
                <button type='button' onClick={this.handleCompleted}>Remove Completed Task's</button>
            </form>
        )
    }
}

export default TodoForm