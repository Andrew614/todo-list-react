import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            task: this.props.todo.task
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpdate = (event) => {
        event.preventDefault()
        this.props.updateTask(this.props.todo.id, this.state.task)
    }

    render() {
        const { todo, deleteTask, toggleComplete, editTask } = this.props
        const cls = todo.isComplete ? 'tasks__list-item task-finished' : 'tasks__list-item'
        const display =
            todo.isEditing ?
                <form className='update-form' onSubmit={this.handleUpdate}>
                    <input type="text"
                        name='task'
                        value={this.state.task}
                        required
                        onChange={this.handleChange}
                    />
                    <button>Update</button>
                </form>
                :
                <section className='tasks__list-items'>
                    <p className={cls}>
                        {todo.task}
                    </p>
                    <div className='tasks__list-buttons'>
                        <button className='tasks__list-btn'
                            onClick={() => deleteTask(todo.task)}>Delete
                        </button>
                        <button className='tasks__list-btn'
                            onClick={() => toggleComplete(todo.task)}>Redo Task
                        </button>
                        <button className='tasks__list-btn'
                            onClick={() => editTask(todo.task)}>Edit
                        </button>
                    </div>
                </section>

        return (
            <div className='FinishedTask'>
                {display}
            </div>
        )
    }
}

export default Todo