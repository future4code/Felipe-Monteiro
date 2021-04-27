import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  AccordionSummary,
  Accordion,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import { ScreenContainer } from "./styled";

const CandidateCard = ({candidates}) => {
  return (
    <ScreenContainer>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography align={"center"}>
            <h3>{candidates.name}</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <p>
                <h5>Descrição: {candidates.age}</h5>
              </p>
            </div>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ScreenContainer>
  );
};
export default CandidateCard;
