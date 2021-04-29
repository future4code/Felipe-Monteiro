import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    AccordionSummary,
    Accordion,
    Typography,
    AccordionDetails,
  } from "@material-ui/core";
  import { ScreenContainer } from "./styled";

const Approved = ({aux}) =>{
    return <ScreenContainer>
    <Accordion>
      <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header" expandIcon={<ExpandMoreIcon />}>
        <Typography align={'center'}><h3>{aux.name}</h3></Typography>
      </AccordionSummary>
       <AccordionDetails>
        <Typography>
          <div>
            <p><h5>Nome: {aux.name}</h5></p>
          </div>
          <div>
            <p><h5>Idade: {aux.age}</h5></p>
          </div>
          <div>
            <p><h5>Profissão: {aux.profession}</h5></p>
          </div>
          <div>
            <p><h5>Pais: {aux.country}</h5></p>
          </div>
          <div>
            <p><h5>Texto Candidatura:</h5>
              {aux.applicationText}
            </p>
          </div>
         
        </Typography>
      </AccordionDetails> 
    </Accordion>
  </ScreenContainer> 
}
export default Approved;