import React, { Component } from 'react'

class TodoListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTask(this.state)
        this.setState({ task: '' })
    }

    render() {
        return (
            <form className='TodoListForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>Task to complete</label>
                <input type="text"
                    id='task'
                    name='task'
                    value={this.state.task}
                    placeholder='enter task'
                    required
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoListForm