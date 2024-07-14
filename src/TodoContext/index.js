import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    
    //Logica que queremos compartir entre varios niveles de nuestros componentes
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter((todo)=> todo.completed).length;
    const totalTodos = todos.length;


    const searchedTodos = todos.filter((todo)=>{
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });

    const completeTodo = (text)=>{
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex( element => element.text === text);
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
    }

    const deleteTodo = (text)=>{
    const newTodos = [...todos]
    const indexTodo = todos.findIndex((element)=> element.text === text);
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
    }


    return (
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo
            }
        
        }>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };