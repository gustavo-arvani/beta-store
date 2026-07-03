import './detalhes.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detalhes(){
    const { id } = useParams();
    const[detalhesProduto, setDetalhes] = useState({});

    useEffect(()=>{
        function loadApi(){
            let apiUrl = `https://fakestoreapi.com/Products/${id}`
            fetch(apiUrl)
            .then((response)=>response.json())
            .then((json)=>setDetalhes(json))
        }

        loadApi();
    }, [])

    return(
        <div className='detalhes'>
            <h2>{detalhesProduto.title}</h2>
        </div>
    )
}

export default Detalhes;