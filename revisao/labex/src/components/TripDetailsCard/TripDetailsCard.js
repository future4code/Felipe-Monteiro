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

const TripDetailsCard = (props) => {
  const history = useHistory()
  return (
    <ScreenContainer onClick={props.onClick}>
      <Accordion>
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header" expandIcon={<ExpandMoreIcon />}>
          <Typography align={'center'}><h3>{props.name}</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <p><h5>Descrição: {props.name}</h5></p>
            </div>
            <div>
              <p><h5>Descrição: {props.description}</h5></p>
            </div>
            <div>
              <p><h5>Planeta: {props.planet}</h5></p>
            </div>
            <div>
              <p><h5>Duração em dias: {props.durationInDays}</h5></p>
            </div>
            <div>
              <p><h5>Data: {props.date}</h5></p>
            </div>
              <Button
            fullWidth
            fullWidth
            variant={"text"}
            color={"primary"}
            onClick={() => goToAreaAdmin(history)}
          >
            Voltar
        </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ScreenContainer>
  );
};
export default TripDetailsCard;
