import React, { Component } from 'react'
import uuid from 'uuid'
import TodoListForm from './TodoListForm'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [
                {
                    id: uuid(),
                    task: 'learn React',
                    isComplete: false,
                    isEditing: false,
                },
                {
                    id: uuid(),
                    task: 'practice coding',
                    isComplete: false,
                    isEditing: false,
                },
                {
                    id: uuid(),
                    task: 'grocery shopping',
                    isComplete: false,
                    isEditing: false,
                },
                {
                    id: uuid(),
                    task: 'workout',
                    isComplete: false,
                    isEditing: false,
                },
                {
                    id: uuid(),
                    task: 'go to the movies',
                    isComplete: true,
                    isEditing: false,
                },
                {
                    id: uuid(),
                    task: 'play a round of chess',
                    isComplete: true,
                    isEditing: false,
                },
            ],
        }
    }

    addTask = (task) => {
        const taskToAdd = {
            id: uuid(),
            task: task.task,
            isComplete: false,
            isEditing: false,
        }
        this.setState(prevState => (
            {
                taskList: prevState.taskList.concat(taskToAdd)
                //taskList: [...this.state.taskList, taskToAdd]
            }
        ))
    }

    deleteTask = (taskToDeleteId) => {
        this.setState(prevState => (
            {
                taskList: prevState.taskList.filter(todo => todo.id !== taskToDeleteId)
            }
        ))
    }

    edit = (taskToUpdateId) => {
        this.setState(prevState => {
            const updatedTask = prevState.taskList.map((todo, index) => (
                todo.id === taskToUpdateId ? prevState.taskList[index] = {
                    ...prevState.taskList[index],
                    isEditing: true
                }
                    : { ...prevState.taskList[index] }

            ))

            return {
                taskList: updatedTask
            }
        })
    }

    tasksFinished = () => (
        this.state.taskList.filter(task => task.isComplete)
    )

    tasksUnfinished = () => (
        this.state.taskList.filter(task => !task.isComplete)
    )

    toggleComplete = (taskId) => {
        this.setState(prevState => {
            const taskToUpdate = prevState.taskList.find(todo => todo.id === taskId)
            const updatedTask = prevState.taskList.filter(todo => todo.id !== taskId).concat({
                ...taskToUpdate,
                isComplete: !taskToUpdate.isComplete,
            })
            return {
                taskList: updatedTask
            }
        })
    }

    updateTask = (taskToUpdateId, taskToUpdate) => {
        this.setState(prevState => {
            const updatedTask = prevState.taskList.map((todo, index) => (
                todo.id === taskToUpdateId ? prevState.taskList[index] = {
                    ...prevState.taskList[index],
                    task: taskToUpdate,
                    isEditing: false
                }
                    : { ...prevState.taskList[index] }

            ))

            return {
                taskList: updatedTask
            }
        })
    }

    render() {
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>
                <TodoListForm addTask={this.addTask} />
                <div className='tasks-container'>
                    <section className='tasks'>
                        <h3 className='tasks-title'>Unfinished Tasks</h3>
                        <div className='tasks__list'>
                            {this.tasksUnfinished().map(task =>
                                <Todo key={task.id} todo={task}
                                    deleteTask={this.deleteTask}
                                    toggleComplete={this.toggleComplete}
                                    editTask={this.edit}
                                    updateTask={this.updateTask}
                                />
                            )}
                        </div>
                    </section>
                    <section className='tasks'>
                        <h3 className='tasks-title'>Finished Tasks</h3>
                        <div className='tasks__list'>
                            {this.tasksFinished().map(task =>
                                <Todo key={task.id} todo={task}
                                    deleteTask={this.deleteTask}
                                    toggleComplete={this.toggleComplete}
                                    editTask={this.edit}
                                    updateTask={this.updateTask}
                                />
                            )}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default TodoList