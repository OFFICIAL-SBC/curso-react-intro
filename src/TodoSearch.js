import React from 'react';
import './TodoSearch.css';

function TodoSearch(props){

    return (
        <input 
        className="TodoSearch" 
        placeholder="Tareas pendientes"
        value={props.searchValue}
        onChange={(event)=>{
            props.setSearchValue(event.target.value);
        }}/>
    );
}

export { TodoSearch };