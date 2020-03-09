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
    }

    handleCompleted = () => {
        this.props.deleteCompleted()
    }

    render() {
        console.log(this.props)
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