import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import Login from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Header from '../components/Header/Header'
const Router = ({rightButtonText,setRightButtonText}) => {
  return (
      <Switch>
          <Route exact path="/login">
              <Login rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
          </Route>
          <Route exact path="/area-admin">
              <AdminHomePage/>
          </Route>
          <Route exact path="/inscreverparaviagem">
              <ApplicationFormPage/>
          </Route>
          <Route exact path="/criarviagem">
              <CreateTripPage/>
          </Route>
          <Route exact path="/">
              <HomePage/>
          </Route>
          <Route exact path="/listaviagens">
              <ListTripsPage/>
          </Route>
          <Route exact path="/detalhes/:id">
              <TripDetailsPage/>
          </Route>
          <Route exact path="/error">
              <ErrorPage/>
          </Route>
      </Switch>
  );
};
export default Router;
