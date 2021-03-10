import React from "react"
import './App.css';
import Signup from "./pages/auth/Signup"
import { Button,Container } from "react-bootstrap"
import { AuthProvider } from "../src/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/auth/Login"
import PrivateRoute from "./pages/auth/PrivateRoute"
import ForgotPassword from "./pages/auth/ForgotPassword"
// import NavBar from "./Components/Navbar";



// import UpdateProfile from "./UpdateProfile"


function App() {
  return (
   
    <div className="App-header">
    <Router>
   
        <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        
          
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/forgot-password" exact component={ForgotPassword} />
              </Switch>
            </AuthProvider>
         
        
      </Container>
     
    </Router>
    </div>
  );
}

export default App;
