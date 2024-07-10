import './App.css';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';


// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Doblar ropa', completed: false},
//   {text: 'Gym', completed: true},
//   {text: 'Futbol', completed: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {


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
  })

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

  return(
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
