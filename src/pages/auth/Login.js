import React, { useRef, useState } from "react"
import './../../App.css';
import logo from './../../logo.svg';
import logo2 from './../../tmsl.png';
import { Form, Button, Card, Alert,Navbar } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
   
    <div className="App">
    
    <Navbar bg="info" variant="dark" className="justify-content-between" >
    <Navbar.Brand href="#home" ><div className="brand"> <img src={logo2} className="App-logo2" alt="logo" /> <h3 className="ml-4 pt-2">   Techno Main, Salt Lake</h3></div></Navbar.Brand>
      <Link to="/signup" ><Button variant="outline-light" className=" mr-sm-2">New Registration</Button></Link>
    </Navbar>
  
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      <h3>Welcome to</h3>
      <h1>Online Notes Repository</h1>
    </p>
   
   
   
      <Card bg="dark"  className="w-40">
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type="email" placeholder="email here for login..." ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type="password" placeholder="password here for login..." ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </header>
    </div>
    
  )
}