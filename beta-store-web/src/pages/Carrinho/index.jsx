import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./carrinho.css";
import { translations } from "../../data/translations";
import { toast } from 'react-toastify';

function Carrinho() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const iitemsList = localStorage.getItem("@betastore");
    setProducts(JSON.parse(iitemsList) || []);
  }, []);

  function increaseQuantity(id) {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setProducts(updatedProducts);
    localStorage.setItem("@betastore", JSON.stringify(updatedProducts));
  }

  function decreaseQuantity(id) {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
    setProducts(updatedProducts);
    localStorage.setItem("@betastore", JSON.stringify(updatedProducts));
  }

  function removeProduct(id) {
    const updatedProducts = products.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    setProducts(updatedProducts);
    localStorage.setItem("@betastore", JSON.stringify(updatedProducts));
  }

  function finishPurchase() {
    if (products.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    setProducts([]);
    localStorage.setItem("@betastore", JSON.stringify([]));
    toast("Compra concluída com sucesso!");
  }

  const totalPrice = products.reduce((acumulador, item) => {
    return acumulador + item.price * item.quantity;
  }, 0);

  return (
    <div className="carrinho">
      <h2 className="title">Carrinho</h2>

      <div className="items-guide">
        <h3>Produto</h3>
        <h3>Quantidade</h3>
        <h3>Sub-total</h3>
      </div>

      {products.length === 0 ? (
        <h2 className="empty-cart">Seu carrinho está vazio.</h2>
      ) : (
        <>
          {products.map((item) => {
            return (
              <div className="container" key={item.id}>
                <div className="product">
                  <div className="product-info">
                    <div className="image-product">
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className="titlePrice">
                      <h3>{translations[item.title] || item.title}</h3>
                      <span>
                        {translations[item.category] || item.category}
                      </span>

                      {item.price && (
                        <span>
                          R$ {item.price.toFixed(2).replace(".", ",")}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="product-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <div className="total-price">
                    {item.price && (
                      <span className="preco">
                        R${" "}
                        {(item.price * item.quantity)
                          .toFixed(2)
                          .replace(".", ",")}
                      </span>
                    )}

                    <button onClick={() => removeProduct(item.id)}>
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="total-finish">
            <span>Total: R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
          </div>

          <div className="finish">
            <hr />
            <Link to="/produtos">Continue Comprando</Link>
            <button onClick={finishPurchase}>Concluir compra</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;
