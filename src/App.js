import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Page404 from './Pages/Page404'
import Article from './Pages/Article'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path='/article/:articleId+' component={Article}/>
        <Route path='*' component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
