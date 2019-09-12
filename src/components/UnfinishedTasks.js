import React from 'react'

export default ({ taskList, deleteTask, completeTask }) => {

    return (
        <div className='tasks'>
            <h3 className='tasks-title'>Unfinished Tasks</h3>
            {taskList.map(todo => (
                <ul className='tasks__list' key={todo.id}>
                    <li className='tasks__list-item'>
                        {todo.task}
                    </li>
                    <button className='tasks__list-btn'
                        onClick={() => deleteTask(todo.task)}>Delete
                    </button>
                    <button className='tasks__list-btn'
                        onClick={() => completeTask(todo.task)}>Completed
                    </button>
                </ul>
            ))}
        </div>
    )
}