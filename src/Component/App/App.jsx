import "./App.css";
import Header from "../Header/Header";
import Items from "../Items/Items"
import Item from "../../data/Item"

function App() {

  return (

    <div className="container">

      <div>
        <Header />
      </div>

  <div className="grid-con">
  
    {Item.map((Item) => (
      <Items key={Item.id} {...Item} />
    ))}

  </div>
</div>
   
  )}

export default App;
