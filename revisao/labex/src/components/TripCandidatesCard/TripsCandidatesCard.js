import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import {
  AccordionSummary,
  Accordion,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import { ScreenContainer } from "./styled";
import { goToAreaAdmin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import CandidateCard from "../Candidates/CandidateCard";

const TripsCandidatesCard = ({candidates, id, refresh}) => {
  const history = useHistory()
     
  

  return (
     <ScreenContainer>
      <Accordion>
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header" expandIcon={<ExpandMoreIcon />}>
          <Typography align={'center'}><h3>{candidates.name}</h3></Typography>
        </AccordionSummary>
         <AccordionDetails>
          <Typography>
            <div>
              <p><h5>Nome: {candidates.name}</h5></p>
            </div>
            <div>
              <p><h5>Idade: {candidates.age}</h5></p>
            </div>
            <div>
              <p><h5>Profissão: {candidates.profession}</h5></p>
            </div>
            <div>
              <p><h5>Pais: {candidates.country}</h5></p>
            </div>
            <div>
              <p><h5>Texto Candidatura:</h5>
                {candidates.applicationText}
              </p>
            </div>
            <Button
            fullWidth
            fullWidth
            variant={'contained'}
            color={"primary"}
            onClick={() => goToAreaAdmin(history)}
          >
            Aprovar
        </Button>
        <Button
            fullWidth
            fullWidth
            variant={'text'}
            color={"primary"}
            onClick={() => goToAreaAdmin(history)}
          >
            Reprovar
        </Button>
             
          </Typography>
        </AccordionDetails> */}
      </Accordion>
    </ScreenContainer>
  ); 
}
export default TripsCandidatesCard;
