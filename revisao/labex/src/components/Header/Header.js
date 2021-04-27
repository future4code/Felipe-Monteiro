import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from './styled';
import { goToHome, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import React from 'react'

const Header = ({rightButtonText,setRightButtonText}) => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const logout = () =>{
    localStorage.removeItem("token")
  }
  const rightButtonAction = () =>{
    if(token){
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }
  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToHome(history)} color="inherit">
            LABEX
          </Button>
          <Button onClick={rightButtonAction} color="inherit">
            {rightButtonText}
          </Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};
export default Header;
