const Button = (props) => {
    function buttonClickHandler() {
        props.onClicked();
    }

    return <button onClick={buttonClickHandler}>Add New List Item</button>;
};

export default Button;