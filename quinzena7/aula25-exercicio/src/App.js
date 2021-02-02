import React from 'react'
import './App.css';
import styled from 'styled-components'
import Routes from './Routes'
const FlexContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#5667dd, #5ecbf7);
`;

class App extends React.Component {
  render(){
    
  return (
    <FlexContainer>
      <Routes/>
    </FlexContainer>
  );
}
}
export default App;
