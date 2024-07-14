import './TodoCounter.css';
import {TodoContext} from '../TodoContext';
import React from 'react';


function TodoCounter(){
    const {
        completedTodos : completed,
        totalTodos : total

    } = React.useContext(TodoContext);
    return (
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> tareas
        </h1>
    );
}

export { TodoCounter };