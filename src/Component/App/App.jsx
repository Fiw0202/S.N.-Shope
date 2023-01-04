import "./App.css";
import Header from "../Header/Header";
import Items from "../Items/Items"
import Item from './data/Item';

function App() {

  {Item.map((Item , index) => (
    <Items key={Item.id} {...Item} />
  ))}

  return (

    <div className="container">

      <div>
        <Header />
      </div>

      <div>
        <Items 
        id:id
        title:title
        image:image
        price:price
        description:description
        rating:rating/>
      </div>
    </div>
  )}

export default App;
