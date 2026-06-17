import { Link } from 'react-router-dom';
import './home.css';

function Home(){
    return(
        <div className='home'>
            <h1> PÁGINA HOME </h1>
            <Link to="./produto">PRODUTO</Link>
        </div>
    );
}

export default Home;