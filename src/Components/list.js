import React, { useState } from 'react'
import Todo from './todos'

function List(props) {
    return(
        <div className="todo-container">
            <h2>My list</h2>
            <ul className="todo-list">
                <Todo /> 
            </ul>
        </div>
    )
}


export default List;