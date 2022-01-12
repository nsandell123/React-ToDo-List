import './App.css';
import Button from './Button'
import List from './List'
import { useState } from "react";
import Form from './Form';
function App() {
  const [items, setItems] = useState([]);

  function submitButtonHandler(inputText) {
    console.log(inputText);
    setItems((prevState) => [inputText, ...prevState]);
  }
  return (
  
    <div>
      <Form onSubmit={submitButtonHandler} val=""/>
      <List items={items}/>
    </div>
    
  );
}

export default App;
