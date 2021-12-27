import React, { useState } from 'react'

function Form(props) {
    function inputTextHandler(e) {
        console.log(e.target.value)
        props.setInputText(e.target.value)
    }
    function submitTodoHandler(e) {
        e.preventDefault()
        props.setTodos([
            ...props.todos,{text:props.inputText,completed:false}
        ])
        props.setInputText('')
    }
    return(
        <form>
        <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
    </form>
    )
}


export default Form