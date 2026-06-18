import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    function loadApi() {
      let apiUrl = "https://fakestoreapi.com/Products";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setStore(json);
        });
    }

    loadApi();
  }, []);

  const firstItems = store.slice(0, 8);
  return (
    <div className="home">
      <h2>O QUE VOCÊ PRECISA ESTÁ AQUI!</h2>

      <div className="products">
        {firstItems.map((item)=>{
            return(
                <div key={item.id} className="card">
                    <img src={item.image} alt="" />
                    </div>
            )
        })}
      </div>
    </div>
  );
}

export default Home;
