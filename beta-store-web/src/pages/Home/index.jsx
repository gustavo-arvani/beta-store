import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1> PÁGINA HOME </h1>
            <Link to="./produto">PRODUTO</Link>
        </div>
    );
}

export default Home;