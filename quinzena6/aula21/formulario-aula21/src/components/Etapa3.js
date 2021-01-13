import React from 'react';
import styled from 'styled-components'

const InputStyled = styled.input`
    height: 3vh;
    width: 25vw;
`;
const Button = styled.button`
  width: 5vw;
`;

class Etapa3 extends React.Component{
    
    render(){

        return <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <h3>7. Por que você mão terminou um curso de graduação?</h3>
            <InputStyled/>
            <h3>8. Você fez algum curso complementar?</h3>
            <select>
                <option value="0">Nenhum</option>
            </select>
        </div>

    }
}
export default Etapa3
