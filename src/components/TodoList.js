import React, { Component } from 'react'
import uuid from 'uuid'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [
                {
                    id: uuid(),
                    task: 'grocery shopping',
                },
                {
                    id: uuid(),
                    task: 'workout',
                },
                {
                    id: uuid(),
                    task: 'learn React',
                },
                {
                    id: uuid(),
                    task: 'practice coding',
                },
            ],
        }
    }

    deleteTask = (taskToDelete) => {
        this.setState(prevState => (
            {
                taskList: prevState.taskList.filter(todo => todo.task !== taskToDelete)
            }
        ))
    }

    renderTaskList = () => {
        return (
            this.state.taskList.map(todo => (
                <div className='tasks__list' key={todo.id}>
                    <li className='tasks__list-item'>
                        {todo.task}
                    </li>
                    <button className='tasks__list-btn'
                        onClick={() => this.deleteTask(todo.task)}>X
                    </button>
                </div>
            ))
        )
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <ul className='tasks'>{this.renderTaskList()}</ul>
            </div>
        )
    }
}

export default TodoList