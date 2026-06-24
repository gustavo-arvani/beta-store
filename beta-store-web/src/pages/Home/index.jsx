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

  const translations = {
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops":
      "Mochila Fjallraven",

    "Mens Casual Premium Slim Fit T-Shirts ": "Camiseta Premium Masculina",

    "Mens Cotton Jacket": "Jaqueta de Algodão",

    "Mens Casual Slim Fit": "Camiseta Slim Fit",

    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet":
      "Pulseira Naga",

    "Solid Gold Petite Micropave ": "Anel Micropavê",

    "White Gold Plated Princess": "Anel Princesa",

    "Pierced Owl Rose Gold Plated Stainless Steel Double": "Brinco Ouro Rosé",
  };

  const firstItems = store.slice(0, 8);
  return (
    <div className="home">
      <h2>O QUE VOCÊ PRECISA ESTÁ AQUI!</h2>

      <div className="products">
        {firstItems.map((item) => {
          return (
            <div className="container">

              <div key={item.id} className="card">
                <div className="image">
                  <Link to="">
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="titles">
                  <span>{translations[item.title] || item.title}</span>
                  <Link to="" className="buy-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      viewBox="0 -960 960 960"
                      width="22px"
                      fill="#e3e3e3"
                    >
                      <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                    </svg>
                    <span className="buy-text">Comprar</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button><Link to="/produtos">Todos os Produtos</Link></button>
    </div>
  );
}

export default Home;
