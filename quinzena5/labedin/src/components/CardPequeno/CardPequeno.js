import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        
            <div className="smallcard-container">
                <div><img src={ props.imagem } /></div>
                <div>Email: <strong>{props.email}</strong></div>
                <div><img src={ props.imagem2 } /></div>
                <div>Github: <a>github.com/future4code/Felipe-Monteiro</a></div>
                <div><img src={ props.imagem3 } /></div>
                <div>Instagram: <a>felipmonteiro_</a></div>
            </div>
    
    )
}

export default CardPequeno;