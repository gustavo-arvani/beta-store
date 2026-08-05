import { useEffect, useState } from "react";
import "./carrinho.css";
import { translations } from "../../data/translations";

function Carrinho() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const iitemsList = localStorage.getItem("@betastore");
    setProducts(JSON.parse(iitemsList) || []);

  },[])

  return (
    <div className="carrinho">
      <h2>Carrinho</h2>

      <ul>
        {products.map((item)=>{
          return(
            <li key={item.id}>{translations[item.title] || item.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Carrinho;
