import './App.css';
import Button from './Button'
import List from './List'
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  function buttonClickHandlerProp() {
    setItems((prevState) => ['bob', ...prevState]);
  }
  return (
  
    <div>
      <Button onClicked={buttonClickHandlerProp}/>
      <List items={items}/>
    </div>
    
  );
}

export default App;
