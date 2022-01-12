const List = (props) => {
    
    
    return (
    <div>{props.items.length === 0 ? <h1>No Expenses Found</h1> : props.items.map((item) => <h1>{item}</h1>)}</div>
    );
};

export default List;