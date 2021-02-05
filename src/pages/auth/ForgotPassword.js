import React, { useRef, useState } from "react"
import './../../App.css';
import logo from './../../logo.svg';
import logo2 from './../../tmsl.png';
import { Form, Button, Card, Alert,Navbar} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
    
   
      <Card bg="dark"  className="w-30">
        <Card.Body>
          <h2 className="text-center mb-4 text-white">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type="email" placeholder="Email here..." ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
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