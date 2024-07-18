import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading'; 
import { TodosError} from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import {TodoForm } from '../TodoForm';

function AppUI (){
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext);

return (
    <React.Fragment>
        <TodoCounter />

        <TodoSearch />

        <TodoList>
            {loading && (
                <React.Fragment>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </React.Fragment>
            )}
            {error && <TodosError />}
            { (!loading && searchedTodos.length === 0) && <EmptyTodos />}
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

        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

    </React.Fragment>
    );
}

export { AppUI }