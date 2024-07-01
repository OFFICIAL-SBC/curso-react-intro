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
  const [todos, setTodos]= React.useState(defaultTodos);
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
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter  total={totalTodos} completed={completedTodos} />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {
          searchedTodos.map((todo)=>{
            return (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                />
            );
          })
        }
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
