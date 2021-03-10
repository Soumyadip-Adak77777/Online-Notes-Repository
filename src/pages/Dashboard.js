import MyNavbar from "./../Components/Navbar";
import React, { useState } from "react"
import {  Button,Navbar } from "react-bootstrap"

import { useAuth } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route,  useHistory } from "react-router-dom"

import UploadNotes from "./teacher/UploadNotes";

import ViewUploaded from "./teacher/ViewUploaded";

import ViewNotes from "./student/ViewNotes";
import ViewProfile from "./student/ViewProfile";

export default function Dashboard() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
if(currentUser.email==="admin@gmail.com"){
  return (
    
    <div className="App">
      
      <Router>  
      <Navbar bg="#060b26" variant="dark" className="justify-content-between">
       
        <MyNavbar />
        
      
        <div className="w-100 text-right mt-2">
        <Button variant="link" onClick={handleLogout} bg="danger">
          Log Out
        </Button>
      </div>
      </Navbar>
      <header className="App-header">
        <div>
       
        <Switch>
         
        <Route path='/' exact component={UploadNotes} /> 
       
        <Route path='/uploadnotes'  component={UploadNotes} />
        
        
        <Route path='/viewuploaded' component={ViewUploaded} />
       
 
      
     
  </Switch>

        </div>
      
      
      </header>
      </Router>
    </div> 
   
  )
}else{
  return (
    
    <div className="App">
      <Router>  
      <Navbar bg="#060b26" variant="dark" className="justify-content-between">
       
        <MyNavbar />
        
      
        <div className="w-100 text-right mt-2">
        <Button variant="link" onClick={handleLogout} bg="danger">
          Log Out
        </Button>
      </div>
      </Navbar>
      <header className="App-header">
        <div>
        
        <Switch>
         
        <Route path='/' exact component={ViewNotes} /> 
      
       
 
        <Route path='/viewprofile' component={ViewProfile} />
      <Route path='/viewnotes' component={ViewNotes} />
        
  </Switch>

        </div>
      
      
      </header>
      </Router>
    </div> 
   
  )
}
}