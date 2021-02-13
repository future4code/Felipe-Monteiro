import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreatePlayList from './components/createplaylist/createplaylist';
import Lista from './components/Lista/Lista';
import AddMusica from '../src/components/addMusicasPlaylist/AddMusica'
const Routes =()=>{
    return (<BrowserRouter>
    <Switch>
        <Route exact path="/" component={CreatePlayList}/>
        <Route path="/Lista" component={Lista}/> 
        <Route path="/AddMusica" component={AddMusica}/>
        
    </Switch>
    </BrowserRouter>)
}
export default Routes;