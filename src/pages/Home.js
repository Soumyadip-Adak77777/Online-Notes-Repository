import '../App.css';
import logo from './../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Login from './auth/Login';


function Home() {
  return (
    <div className="Home">
      <Router>
      
      
     
      <Switch>
      {/* <Route path='/' exact component={Login} />
      <Route path='/regestration' component={Registration} />
      <Route path='/login' component={Login} /> */}
     {/* <Route path='/dashboard' component={Dashboard} /> */}
      </Switch>
    
      
      
      </Router>
    </div>
  );
}

export default Home;
