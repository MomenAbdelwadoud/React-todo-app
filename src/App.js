import React,{useState} from 'react';
import Form from './Components/form'
import List from './Components/list';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
     <header>
        <h2>My ToDo List </h2>
    </header>
    <Form setTodos={setTodos} todos={todos} inputText={inputText} setInputText={setInputText}/>
    <List />
    </div>
  );
}

export default App;
