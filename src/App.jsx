import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI =  `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  // Fetch items when component mounts
  
  const fetchData = async()=>{
    try{
      const response = await fetch(API_URI,{
        method:"GET",
        headers: {"Content-Type":"application/json"}
      })
      const data = await response.json();
      // console.group(response.status)
      setItems(data)
    }
    catch(err){
      console.log("Error:",err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete item");

      // Remove item from state after successful delete
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  // console.log(items)

  return (
    <div>
      <h2>Items List</h2>
      {items.map((d,index)=>(
        <div key={index}>
          <h4>{d.name}</h4>
        </div>
      ))}
      <ItemList items={items} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
