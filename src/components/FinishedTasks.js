import React from 'react'

export default ({ taskList, deleteTask, completeTask }) => {

    return (
        taskList.map(todo => (
            <ul className='tasks__list' key={todo.id}>
                <li className='tasks__list-item'>
                    {todo.task}
                </li>
                <button className='tasks__list-btn'
                    onClick={() => deleteTask(todo.task)}>Delete
                </button>
                <button className='tasks__list-btn'
                    onClick={() => completeTask(todo.task)}>Redo
                </button>
            </ul>
        ))
    )
}