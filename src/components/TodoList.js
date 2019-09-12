import React, { Component } from 'react'
import uuid from 'uuid'
import TodoListForm from './TodoListForm'

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

    addTask = (task) => {
        const taskToAdd = {
            id: uuid(),
            ...task
        }
        this.setState(prevState => (
            {
                taskList: [...this.state.taskList, taskToAdd]
            }
        ))
    }

    deleteTask = (taskToDelete) => {
        this.setState(prevState => (
            {
                taskList: prevState.taskList.filter(todo => todo.task !== taskToDelete)
            }
        ))
    }

    handleClick = taskToDelete => {
        this.deleteTask(taskToDelete)
    }

    renderTaskList = () => {
        return (
            this.state.taskList.map(todo => (
                <div className='tasks__list' key={todo.id}>
                    <li className='tasks__list-item'>
                        {todo.task}
                    </li>
                    <button className='tasks__list-btn'
                        onClick={() => this.handleClick(todo.task)}>X
                    </button>
                </div>
            ))
        )
    }

    render() {
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>
                <TodoListForm addTask={this.addTask} />
                <ul className='tasks'>{this.renderTaskList()}</ul>
            </div>
        )
    }
}

export default TodoList