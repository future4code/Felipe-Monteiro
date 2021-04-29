import React from "react";
import {
  AccordionSummary,
  Accordion,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import { ScreenContainer } from "./styled";

const TravelCard = (props) => {
  return (
    <ScreenContainer onClick={props.onClick}>
      <Accordion>
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography align={'center'}>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>{props.description}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ScreenContainer>
  );
};
export default TravelCard;
