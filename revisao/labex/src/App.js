import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Router from "./routes/Router";
import theme from "./constants/theme";
import Header from './components/Header/Header'

function App() {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
          <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
