import { useState } from 'react';
const Form = (props) => {
    const [inputBox, setinputBox] = useState('');

    function collectText(event) {
        setinputBox(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        props.onSubmit(inputBox);
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={collectText} defaultValue={props.val} />
            <button type="submit">Add Item </button>
        </form>

    );
};

export default Form;