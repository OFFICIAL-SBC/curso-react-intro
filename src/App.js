import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Doblar ropa', completed: false},
  {text: 'Gym', completed: true},
  {text: 'Futbol', completed: false},
]


function App() {


  //! De que tipo son los estados?
  const [todos, setTodos]= React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  //! De que tipo son los estados derivados?
  const completedTodos = todos.filter((todo)=> todo.completed).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan to-dos con: ' + searchValue);

  const createTodoList = (array)=>{
    return array.map((todo)=>{
      return <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}/>
    })
  }


  return (
    <React.Fragment>
      <TodoCounter  total={totalTodos} completed={completedTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      //! Porque vuelve a renderizar?
      //! Porque se meustran todos los todos cuando no se ha escrito nada en el input?
      <TodoList>
        {createTodoList(todos.filter((todo)=>{
          return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        }))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
