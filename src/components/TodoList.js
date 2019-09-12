import React, { Component } from 'react'
import uuid from 'uuid'
import TodoListForm from './TodoListForm'
import UnfinishedTasks from './UnfinishedTasks'
import FinishedTasks from './FinishedTasks'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [
                {
                    id: uuid(),
                    task: 'learn React',
                    isDone: false,
                },
                {
                    id: uuid(),
                    task: 'practice coding',
                    isDone: false,
                },
                {
                    id: uuid(),
                    task: 'grocery shopping',
                    isDone: false,
                },
                {
                    id: uuid(),
                    task: 'workout',
                    isDone: false,
                },
                {
                    id: uuid(),
                    task: 'go to the movies',
                    isDone: true,
                },
                {
                    id: uuid(),
                    task: 'play a round of chess',
                    isDone: true,
                },
            ],
        }
    }

    addTask = (task) => {
        const taskToAdd = {
            id: uuid(),
            task: task.task,
            isDone: false,
        }
        this.setState(prevState => (
            {
                taskList: prevState.taskList.concat(taskToAdd)
                //taskList: [...this.state.taskList, taskToAdd]
            }
        ))
    }

    toggleCompleteTask = (task) => {
        this.setState(prevState => {
            const taskToUpdate = prevState.taskList.find(todo => todo.task === task)
            const updatedTask = prevState.taskList.filter(todo => todo.task !== task).concat({
                id: taskToUpdate.id,
                task: taskToUpdate.task,
                isDone: !taskToUpdate.isDone,
            })
            return {
                taskList: updatedTask
            }
        })
    }

    deleteTask = (taskToDelete) => {
        this.setState(prevState => (
            {
                taskList: prevState.taskList.filter(todo => todo.task !== taskToDelete)
            }
        ))
    }

    tasksFinished = () => (
        this.state.taskList.filter(task => task.isDone)
    )

    tasksUnfinished = () => (
        this.state.taskList.filter(task => !task.isDone)
    )

    render() {
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>
                <TodoListForm addTask={this.addTask} />
                <div className='tasks-container'>
                    <UnfinishedTasks taskList={this.tasksUnfinished()}
                        deleteTask={this.deleteTask}
                        completeTask={this.toggleCompleteTask}
                    />
                    <FinishedTasks taskList={this.tasksFinished()}
                        deleteTask={this.deleteTask}
                        completeTask={this.toggleCompleteTask}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList