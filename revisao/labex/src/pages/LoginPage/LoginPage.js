import React from "react";
import Button from "@material-ui/core/Button";
import { goToHome } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import LoginForm from './LoginForm'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({rightButtonText,setRightButtonText}) => {
  useUnprotectedPage()
  const history = useHistory();
  return (
    <div>
      <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Button
        fullWidth
        variant={"text"}
        color={"primary"}
        onClick={() => goToHome(history)}
      >
        Voltar
      </Button>
    </div>
  );
};

export default LoginPage;
