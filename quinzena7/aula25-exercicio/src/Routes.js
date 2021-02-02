import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaUsers from './components/ListaUsers/ListaUsers';
const Routes =()=>{
    return (<BrowserRouter>
    <Switch>
        <Route exact path="/" component={FormularioCadastro}/>
        <Route path="/ListaUsers" component={ListaUsers}/>
    </Switch>
    </BrowserRouter>)
}
export default Routes;