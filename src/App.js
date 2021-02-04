import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Gallery from './pages/Gallery';
import Calendar from './pages/Calendar';
import Agenda from './pages/Agenda';
import Cart from './pages/Cart' ;
class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Gallery" component={Gallery}/>
            <Route path="/Calendar" component={Calendar}/>
            <Route path="/agenda" component={Agenda}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
