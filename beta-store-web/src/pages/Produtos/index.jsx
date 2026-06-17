import { Link } from 'react-router-dom';
import './produtos.css';


function Produto(){
    return(
        <div className='produtos'>
            <h1> PÁGINA DE DETALHES DO PRODUTO </h1>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Produto;