import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import './Logo.css'

const Logo = styled.div`
    padding: 10px;
    width: 100%;
    text-align: center;
`;

export default function Home() {
    
  return <Logo>
      <span className='astro'>astro</span>
      <span className='match'>match</span> 
      <Link to="/Matchs"><img id="imagemlogo" src='./grupo-pessoas.png'></img></Link>
    </Logo>;
}
