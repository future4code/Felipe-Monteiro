import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Select from "../../components/Select/Select";
import { goToHome } from "../../routes/coordinator";
import { InputsContainer, CountryStyled } from "./styled";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import useDate from "../../hooks/useDate";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Input from "../../components/Input/Input";
const CreateTripForm = () => {
  const history = useHistory();
  const [date] = useState(useDate());
  const [form, handleInputChange, resetForm] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 50,
  });
  const getToken = () => {
    const token = localStorage.getItem("token");

    return {
      headers: {
        auth: token,
      },
    };
  };
  const createTrip = async (data) => {
    const auth = getToken();

    try {
      await axios.post(`${BASE_URL}felipe/trips`, data, auth);
      alert("O item foi criado");
    } catch (err) {
      alert("Ocorreu um erro :(");
    }
  };
  const planets = [
    "Mercurio",
    "Venus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Netuno",
  ];
  const submitForm = (e) => {
    e.preventDefault();
    createTrip(form);

    resetForm()
  };
  return (
    <InputsContainer>
      <h5>Criar Viagem</h5>
      <form onSubmit={submitForm}>
      <div>
        <label>Nome</label>
        <Input
          name="name"
          value={form.name}
          handleValue={handleInputChange}
          placeholder="Nome"
          title="O nome deve conter no minimo 3 letras"
          pattern="^[a-zA-Z\s\.]{3,}$"
          required
        />
      </div>
      <div>
        <label>Planeta</label>
        <Select
          name="planet"
          value={form.planet}
          handleValue={handleInputChange}
          options={planets}
          placeholder="Escolha um planeta"
          required
        />
      </div>
      <div>
        <label>Data</label>
        <Input
          name="date"
          value={form.date}
          handleValue={handleInputChange}
          type="date"
          min={date ? date : ''}
        />
      </div>
      <div>
        <label>Descriçao</label>
        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handleInputChange}
          placeholder="Descrição"
          title="A descrição deve contem no minimo 30 caracteres"
          required
          pattern="^[a-zA-Z\s\.]{30,}$"
        />
      </div>
      <div>
        <label>Duração em dias</label>
        <Input
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          handleValue={handleInputChange}
          min="50"
          placeholder="Duração em dias"
          required
        />
      </div>
        
        <Button
          type={"submit"}
          variant={"contained"}
          color={"primary"}
          fullWidth
        >
          Enviar
        </Button>
        <Button
          fullWidth
          variant={"text"}
          color={"primary"}
          onClick={() => goToHome(history)}
        >
          Voltar
        </Button>
      </form>
    </InputsContainer>
  );
};

export default CreateTripForm;
