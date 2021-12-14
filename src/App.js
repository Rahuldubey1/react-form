import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import { Route, Switch } from "react-router-dom";
import List from './components/list';
// import Home from './components/home';


function App() {
  return (
    <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={List} />
        </Switch>
    </>
  )
}

export default App;
