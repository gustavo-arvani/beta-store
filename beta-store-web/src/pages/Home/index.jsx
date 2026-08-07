import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { translations } from "../../data/translations";
import ProductCard from "../../components/ProductCard";

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
      <div className="clothes">
        <span>
          Explore nossa seleção de roupas, acessórios, eletrônicos e muito mais.
        </span>
        <Link to="/produtos">Comprar</Link>
      </div>

      <div className="itens-title">
        <hr className="hr" />
        <h2>Em Destaque</h2>
        <hr className="hr" />
      </div>

      <div className="products">
        {firstItems.map((item) => {
          return (
              <ProductCard
                key={item.id}
                item={item}
                translations={translations}
              />
          );
        })}
      </div>

      <button>
        <Link to="/produtos">Todos os Produtos</Link>
      </button>

      <div className="itens-title">
        <hr className="hr" />
        <h2>Compre por categoria</h2>
        <hr className="hr" />
      </div>

      <div className="categories">
        <Link to="/produtos?categoria=electronics" className="electronics">
          <span>Eletrônicos</span>
        </Link>

        <Link to="/produtos?categoria=jewelery" className="jewelery">
          <span>Jóias</span>
        </Link>

        <Link to="/produtos?categoria=men's clothing" className="mens">
          <span>Moda Masculina</span>
        </Link>

        <Link to="/produtos?categoria=women's clothing" className="women">
          <span>Moda Feminina</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
