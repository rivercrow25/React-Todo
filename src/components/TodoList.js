// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <ul>
            {props.data.map(item => {
                return (
                    <Todo toggleCompleted={props.toggleCompleted} key={item.id} item={item} />
                )
            })}
        </ul>
    )
}

export default TodoList