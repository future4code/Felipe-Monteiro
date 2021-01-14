import React from 'react';
import styled from 'styled-components'

const InputStyled = styled.input`
    height: 3vh;
    width: 25vw;
`;
const Button = styled.button`
  width: 5vw;
  margin: 10px;
`;

class Etapa1 extends React.Component{
    
   
    render(){
        return <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h3>1. Qual o seu nome?</h3>
            <InputStyled/>
            <h3>2. Qual sua idade?</h3>
            <InputStyled/>
            <h3>3. Qual o seu email?</h3>
            <InputStyled/>
            <h3>4. Qual a sua escolaridade?</h3>
            <select>
                <option value="0">Ensino Médio Incompleto</option>
                <option value="1">Ensino Médio Completo</option>
                <option value="3">Ensino Superior Incompleto</option>
                <option value="4">Ensino Superior Completo</option>
            </select>
        </div>

    }
}
export default Etapa1