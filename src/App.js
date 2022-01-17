import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/favorites' component={Favorites}/>
      </Switch>
    </div>
  );
}

export default App;
