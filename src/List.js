import { useState } from "react";
const List = () => {
    
    //const [expenses, setExpenses] = useState([]);
    const expenses = [];
    expenses.push('bob');
    return (
    <div>{expenses.map((expense) => <h1>{expense}</h1>)}</div>
    );
};

export default List;