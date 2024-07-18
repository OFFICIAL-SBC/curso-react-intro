import './CreateTodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){

    const { openModal, setOpenModal } = React.useContext(TodoContext); 

    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <button className='CreateTodoButton'
            onClick={
                (event) => {
                    console.log("Le diste click");
                    console.log(event);
                    console.log(event.target);
                    toggleModal();
                }
            }
        >+</button>
    );
}

export { CreateTodoButton }