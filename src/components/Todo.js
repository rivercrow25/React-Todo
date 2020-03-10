import React from 'react'

const Todo = (props) => {
    return (
        <div >
            <h2 className={`${props.item.completed ? 'completed' : ''}`}
                onClick={() => props.toggleCompleted(props.item.id)} >{props.item.task}</h2>
        </div>
    )
}

export default Todo