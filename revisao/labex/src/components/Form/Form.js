import React from "react";
import {BASE_URL} from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { Button} from "@material-ui/core";
import {goToHome} from '../../routes/coordinator'
import axios from 'axios'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import { ScreenContainer } from "../../pages/ApplicationFormPage/styled";
import {ButtonStyled} from './styled'

const Form = ({ history, trips, countries }) => {
  
  const [form, handleInputChange, resetForm] = useForm({
    trip: "",
    name: "",
    age: 18,
    applicationText: "",
    profession: "",
    country: "",
  });
const applyToTrip = async (id, data) => {
    try {
      const request = await axios.post(`${BASE_URL}felipe/trips/${id}/apply`, data);
      return request.data.message;
    } catch (err) {
      return err.message;
    }
  };
  const onSubmit = (e) => {
    const { trip, ...body } = form;
    e.preventDefault();

    
    applyToTrip(trip, body).then((res) =>{
        resetForm();
        alert(res);
    })
  };
  

  
  return <ScreenContainer>
      <form onSubmit={onSubmit}>
          <div>
        <label><h5>Viagem </h5></label>
        <select
          name="trip"
          value={form.trip}
          onChange={handleInputChange}
          required
        >
          <option value="" defaultValue disable>
            Escolha uma viagem
          </option>
          {trips.map((trip) => {
            return (
              <option value={trip.id}>{`${trip.name} - ${trip.planet}`}</option>
            );
          })}
        </select>
      </div>
      <div>
        <Input
          name="name"
          value={form.name}
          handleValue={handleInputChange}
          placeholder="Nome"
          required
        />
      </div>
      <div>
      <label><h5>Idade</h5></label>
        <Input
          name="age"
          value={form.age}
          handleValue={handleInputChange}
          placeholder="Idade"
          type="number"
          min="18"
          required
        />
      </div>
      <div>
        <Input
          name="profession"
          value={form.profession}
          handleValue={handleInputChange}
          placeholder="Profissão"
          required
        />
      </div>
      <div>
        <label>Pais : </label>
        <Select
          name="country"
          value={form.country}
          handleValue={handleInputChange}
          placeholder="Escolha um Pais"
          options={countries ? countries : []}
          required
        />
      </div>
      <div>
        <input
          name="applicationText"
          type="text"
          value={form.applicationText}
          onChange={handleInputChange}
          placeholder="Texto de candidatura"
          required
          fullWidth
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
          margin={'normal'}
        >
          Voltar
        </Button>
      </form>
      
        
  </ScreenContainer>
};

export default Form;
