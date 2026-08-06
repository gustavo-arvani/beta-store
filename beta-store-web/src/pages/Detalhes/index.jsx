import "./detalhes.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { translations, descriptionTranslations } from "../../data/translations";

function Detalhes() {
  const { id } = useParams();
  const [detalhesProduto, setDetalhes] = useState({});
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);

  const [infoAberta, setInfoAberta] = useState(true);
  const [freteAberta, setFreteAberta] = useState(false);

  const categoryTranslations = {
    electronics: "Eletrônicos",
    jewelery: "Joias",
    "men's clothing": "Moda Masculina",
    "women's clothing": "Moda Feminina",
  };

  useEffect(() => {
    function loadApi() {
      let apiUrl = `https://fakestoreapi.com/Products/${id}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => setDetalhes(json));
    }

    loadApi();
  }, [id]);

  const produtosExibidos = produtosRelacionados.slice(0, 4);

  useEffect(() => {
    function loadRelatedProducts() {
      let apiUrl = "https://fakestoreapi.com/Products";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => {
          const produtosFiltrados = json.filter(
            (item) =>
              item.category === detalhesProduto.category &&
              item.id !== detalhesProduto.id,
          );
          setProdutosRelacionados(produtosFiltrados);
        });
    }
    loadRelatedProducts();
  }, [detalhesProduto]);

  function addCart() {
    const itemsList = localStorage.getItem("@betastore");

    let savedProducts = JSON.parse(itemsList) || [];

    const hasProduct = savedProducts.some(
      (savedProduct) => savedProduct.id === detalhesProduto.id,
    );

    if (hasProduct) {
      alert("ESTE PRODUTO JÁ ESTÁ NO CARRINHO");
      return;
    }

    const newProduct = {...detalhesProduto, quantity: 1}

    savedProducts.push(newProduct);
    localStorage.setItem("@betastore", JSON.stringify(savedProducts));
    alert("PRODUTO ADICIONADO AO CARRINHO");
  }

  return (
    <div className="detalhes">
      <div className="navigation">
        <Link to="/">Home </Link>
        <span>{"> "}</span>

        <Link to="/produtos">Produtos </Link>
        <span>{"> "}</span>

        <Link>{categoryTranslations[detalhesProduto.category]}</Link>
        <span>{" > "}</span>

        <span>Produto</span>
      </div>

      <div className="product">
        <div className="image">
          <img
            src={detalhesProduto.image}
            alt={detalhesProduto.title}
            width="300px"
          />
        </div>
        <div className="item-options">
          <h2>
            {translations[detalhesProduto.title] || detalhesProduto.title}
          </h2>
          {detalhesProduto.price && (
            <span className="preco">
              R$ {detalhesProduto.price.toFixed(2).replace(".", ",")}
            </span>
          )}

          <button className="cart-button" onClick={addCart}>
            Adicionar ao Carrinho
          </button>

          <div className="infos">
            <button
              onClick={() => {
                setInfoAberta(!infoAberta);
                setFreteAberta(false);
              }}
            >
              {infoAberta ? "▼" : "▶"} Informações do produto
            </button>
            {infoAberta && (
              <p>
                {descriptionTranslations[detalhesProduto.description] ||
                  detalhesProduto.description}
              </p>
            )}
          </div>
          <hr />
          <div className="frete">
            <button
              onClick={() => {
                setFreteAberta(!freteAberta);
                setInfoAberta(false);
              }}
            >
              {freteAberta ? "▼" : "▶"}
              Frete
            </button>
            {freteAberta && (
              <p>
                Realizamos entregas para todo o território nacional. O prazo e o
                valor do frete variam conforme a localização e serão calculados
                antes da conclusão da compra. Após o envio, o pedido poderá ser
                acompanhado por meio do código de rastreamento.
              </p>
            )}
          </div>
        </div>
      </div>

      <hr />
      <div className="other-products-title">
        <h2>Você também pode gostar</h2>
      </div>
      <div className="other-products">
        {produtosExibidos.map((item) => {
          return (
            <div key={item.id} className="card">
              <Link to={`/detalhes/${item.id}`} className="card-link">
                <div className="image">
                  <img src={item.image} alt={item.title} />
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

export default Detalhes;
