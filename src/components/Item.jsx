const Item = ({ item, deleteItem }) => {
    return (
      <div style={{ marginBottom: "10px" }}>
        <h4>{item.name}</h4>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    );
  };
  
  export default Item;
  