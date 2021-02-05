import React, { useRef, useState } from "react"
import './../../App.css';
import logo from './../../logo.svg';
import logo2 from './../../tmsl.png';
import { Form, Button, Card, Alert,Navbar } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account(Use min. 6 character password)")
    }

    setLoading(false)
  }

  return (
   
    <div className="App">
     
    <Navbar bg="info" variant="dark" className="justify-content-between">
    <Navbar.Brand href="#home" ><div className="brand"> <img src={logo2} className="App-logo2" alt="logo" /> <h3 className="ml-4 pt-2">   Techno Main, Salt Lake</h3></div></Navbar.Brand>
      <Link to="/signup" ><Button variant="outline-light" className=" mr-sm-2">New Registration</Button></Link>
    </Navbar>
  
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      <h3>Welcome to</h3>
      <h1>Online Notes Repository</h1>
    </p>
   
    
      <Card bg="dark" className="w-30">
        <Card.Body>
          {/* <h2 className="text-center mb-4">Sign Up</h2> */}
          {error && <Alert variant="danger"><h6>{error}</h6></Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type="email" placeholder="Email here..." ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type="password" placeholder="Password here for login..." ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control type="password" placeholder="Confirm Password..." ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </header>
    </div>
    
  )
}