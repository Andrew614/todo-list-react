import React, { Component } from 'react'

class UnfinishedTask extends Component {

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
        const { todo, deleteTask, completeTask, editTask } = this.props

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
                    <p className='tasks__list-item'>
                        {todo.task}
                    </p>
                    <div className='tasks__list-buttons'>
                        <button className='tasks__list-btn'
                            onClick={() => deleteTask(todo.task)}>Delete
                        </button>
                        <button className='tasks__list-btn'
                            onClick={() => completeTask(todo.task)}>Completed
                        </button>
                        <button className='tasks__list-btn'
                            onClick={() => editTask(todo.task)}>Edit
                        </button>
                    </div>
                </section>

        return (
            <div className='UnfinishedTask'>
                {display}
            </div>
        )
    }
}

export default UnfinishedTask