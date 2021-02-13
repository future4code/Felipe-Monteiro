import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EscolherPerfil from './components/escolher-perfil/EscolherPerfil'
import Matchs from './components/Matchs/Matchs'

const Routes =()=>{
    return (<BrowserRouter>
    <Switch>
        <Route exact path="/" component={EscolherPerfil}/>
        <Route exact path="/matchs" component={Matchs}/>
    </Switch>
    </BrowserRouter>)
}
export default Routes;