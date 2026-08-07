import { Link } from "react-router-dom";
import "./productCard.css";

export default function ProductCard({ item, translations }) {
  return (
    <div className="card">
      <Link to={`/detalhes/${item.id}`} className="card-link">

        <div className="image">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="titles">
          <span>
            {translations[item.title] || item.title}
          </span>

          <span className="preco">
            R$ {item.price.toFixed(2).replace(".", ",")}
          </span>
        </div>

      </Link>
    </div>
  );
}