import "./App.css";
import Header from "../Header/Header";
import Items from "../Items/Items"

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">

        <Header />
        
        <Items 
        id:id
        title:title
        image:image
        price:price
        rating:rating/>

      </div>
    </div>
  );
}

export default App;
