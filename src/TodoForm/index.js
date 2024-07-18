import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const {setOpenModal,addTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = ()=>{
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            onCancel();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            placeholder="Escribe tu nueva tarea" 
            value={newTodoValue}
            onChange={onChange}
            />
            <div className='TodoForm-button__buttons-container'>
                <button onClick={onCancel} className='TodoForm-button TodoForm-button--cancel ' type="button">Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add ' type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };