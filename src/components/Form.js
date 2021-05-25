import React from 'react'

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        if (inputText === "") {
            alert('Ваше поле пустое! Заполните!')
            e.preventDefault();
        } else {
            e.preventDefault();
            setTodos([
                ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
            ])

            setInputText("");
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">Все</option>
                    <option value="completed">Завершенные</option>
                    <option value="uncompleted">Незавершенные</option>
                </select>
            </div>
        </form>
    )
}

export default Form
