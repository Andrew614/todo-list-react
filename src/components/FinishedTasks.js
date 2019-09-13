import React from 'react'

export default ({ taskList, deleteTask, redoTask }) => {
    const cls = taskList.isDone ? 'tasks__list-item' : 'tasks__list-item task-finished'
    return (
        <div className='tasks'>
            <h3 className='tasks-title'>Finished Tasks</h3>
            {taskList.map(todo => (
                <ul className='tasks__list' key={todo.id}>
                    <li className={cls}>
                        {todo.task}
                    </li>
                    <div className='tasks__list-buttons'>
                        <button className='tasks__list-btn'
                            onClick={() => deleteTask(todo.task)}>Delete
                        </button>
                        <button className='tasks__list-btn'
                            onClick={() => redoTask(todo.task)}>Redo Task
                        </button>
                    </div>
                </ul>
            ))}
        </div>
    )
}