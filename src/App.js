import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Gallery from './pages/Gallery';
import Calendar from './pages/Calendar';
import Agenda from './pages/Agenda';
import Cart from './pages/Cart' 
import Gagal from './pages/Gagal';

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
            <Route path="/gagal" component={Gagal}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
