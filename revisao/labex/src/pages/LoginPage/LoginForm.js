import React from "react";
import { InputsContainer, LogoImage, ScreenContainer } from "./styled";
import Button from "@material-ui/core/Button";
import logo from "../../assets/foguete.png";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { login } from "../../services/user";

const LoginForm = ({rightButtonText,setRightButtonText}) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setRightButtonText);
  };

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Fazer Login
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default LoginForm;
