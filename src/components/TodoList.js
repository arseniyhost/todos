import React from 'react'

//import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(t => {
                        return <Todo
                            setTodos={setTodos}
                            key={t.id}
                            todos={todos}
                            todo={t}
                            text={t.text}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList
