import React from 'react';
import styled from 'styled-components'

const InputStyled = styled.input`
    height: 3vh;
    width: 25vw;
`;
const Button = styled.button`
  width: 5vw;
`;

class Etapa2 extends React.Component{
    
    render(){

        return <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <h3>5. Qual o curso?</h3>
            <InputStyled/>
            <h3>6. Qual a unidade de ensino?</h3>
            <InputStyled/>
        </div>

    }
}
export default Etapa2