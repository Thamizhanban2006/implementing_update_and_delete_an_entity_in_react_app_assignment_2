import Item from "./Item";

const ItemList = ({ items, deleteItem }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </>
  );
};

export default ItemList;
