import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/">
          <h1>BETA</h1>
          <span>web-store</span>
        </Link>
      </div>

      <div className="links">
        <Link>Página Inicial</Link>
        <Link>Contato</Link>
        <Link>Loja Física</Link>
      </div>

      <div className="redes">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">TikTok</a>
      </div>

      <div className="news">
        <h2>ASSINE</h2>
        <p>Fique por dentro de lançamentos de novos produtos, se inscreva na nossa newsletter!</p>

        <form>
            <label htmlFor="iemail">*Email </label>
                <input type="email" name="email" id="email" required placeholder="Insira seu email"/>
            <br />

            <input type="checkbox" name="check" id="ichek" required/> <p>Aceito receber emails de marketing</p>
            <br />

            <input type="submit" value="Assinar" />
        </form>
      </div>
    </div>
  );
}

export default Footer;
