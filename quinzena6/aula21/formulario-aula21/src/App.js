import React from 'react';
import styled from 'styled-components'
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
import Divider from "./components/Divider"

const MainContainer = styled.main`
    margin: 0px;
    padding: 0px;
    background: linear-gradient(#4158D0, #C850C0, #FFCC70);
    text-align:center;
    position: relative;
`;
const GridContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
let Button = styled.button`
  margin: 10px;
  width: 10vw;
`;
const divisor = styled.div`

`;
class App extends React.Component{
  state = {
    etapa: 1,
  }
  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>
        break;
      case 2:
        return <Etapa2/>
        break;
      case 3:
        return <Etapa3/>
        break;
      case 4:
        return <Final/>
        break;
      default:
        console.log("Erro Default")
    }
  };
  irParaProximaEtapa = () =>{
    this.setState({
      etapa: this.state.etapa +1
    });
  }
  verificaEtapa = () =>{
    if (this.state.etapa < 4) {
      return <Button onClick={this.irParaProximaEtapa}>Próxima Etapa</Button>
    }
  }
  render(){

    return(<MainContainer>
      <GridContainer>
      {this.renderizaEtapa()}
      {this.verificaEtapa()}
      </GridContainer>
      
    </MainContainer>)
  }
}

export default App;
