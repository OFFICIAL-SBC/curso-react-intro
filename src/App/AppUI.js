import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';


function AppUI ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){

return (
    <React.Fragment>
        <TodoCounter  total={totalTodos} completed={completedTodos} />

        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />

        <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Error...</p>}
        { (!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p>}
        {searchedTodos.map((todo)=>{
            return (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            );
            })}
        </TodoList>

        <CreateTodoButton />

    </React.Fragment>
    );
}

export { AppUI }