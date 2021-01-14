import React from 'react';
import styled from 'styled-components'

const InputStyled = styled.input`
    height: 3vh;
    width: 25vw;
`;
const Button = styled.button`
  width: 5vw;
`;

class Final extends React.Component{
    
    render(){

        return <div>
            <h1>O FORMULÁRIO ACABOU</h1>
            <h3>MMuito obrigado por participar! Entraremos em contato!</h3>
            
        </div>

    }
}
export default Final