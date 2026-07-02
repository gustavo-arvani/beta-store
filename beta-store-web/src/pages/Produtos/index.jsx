import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { translations } from "../../data/translations";
import "./produtos.css";

function Produtos() {
  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("categoria");
  console.log(categoria);

  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    function loadApi() {
      let apiUrl = "https://fakestoreapi.com/Products";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setProducts(json);
        });
    }

    loadApi();
  }, []);

  const produtosFiltrados = categoria
    ? products.filter((item) => item.category === categoria)
    : products;

  let titulo;
  if (!categoria) {
    titulo = "Todos os Produtos";
  } else if (categoria === "electronics") {
    titulo = "Eletrônicos";
  } else if (categoria === "men's clothing") {
    titulo = "Moda Masculina";
  } else if (categoria === "women's clothing") {
    titulo = "Moda Feminina";
  } else if (categoria === "jewelery") {
    titulo = "Jóias";
  }

  return (
    <div className="produtos">
      <div className="title">
        <h2>{titulo}</h2>
      </div>

      <div className="options">
        <nav>
          <button onClick={() => setMenuAberto(!menuAberto)}>☰ Categorias</button>
          <ul className={menuAberto ? "menu ativo" : "menu"}>
            <li><Link to="/produtos?categoria=electronics" onClick={() => setMenuAberto(false)} className="electronics">Eletrônicos</Link></li>

            <li><Link to="/produtos?categoria=jewelery" onClick={() => setMenuAberto(false)} className="jewelery">Jóias</Link></li>

            <li><Link to="/produtos?categoria=men's clothing" onClick={() => setMenuAberto(false)} className="mens">Moda Masculina</Link></li>

            <li><Link to="/produtos?categoria=women's clothing" onClick={() => setMenuAberto(false)} className="women">Moda Feminina</Link></li>
          </ul>
        </nav>

        <span className="clear">
          <Link to="/produtos">Limpar</Link>
        </span>
      </div>

      <div className="products">
        {produtosFiltrados.map((item) => {
          return (
            <div key={item.id} className="card">
              <Link className="card-link">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="titles">
                  <span>{translations[item.title] || item.title}</span>
                  <span className="preco">
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Produtos;
