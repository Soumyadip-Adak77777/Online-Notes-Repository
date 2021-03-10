import React, { useState,Component } from 'react'
import { Form, Button,Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";
// import axios from "axios";



export default function ViewProfile() {
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
  async function handleSubmit(e) {
    e.preventDefault()
  
    if (1) {
      
    }
  
    try {
     
    } catch {
     
    }
  
    
  }
  
  
  
 

  return (
    <>
      <div>
    
  
  
      <Card bg="dark">
        <Card.Body>

          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert varient="danger">{error}</Alert>}
          <strong>Email:</strong>{currentUser.email}
          
          {/* <Form>

            <Form.Group id="email">
              <Form.Label>Enter email</Form.Label>
              <Form.Control type="email"  name="email" value={currentUser.email} onChange={this.handleChange} placeholder="Enter email here" />
            </Form.Group>
            <Form.Group id="strsem" >
              <Form.Label>Select Stream with Semester</Form.Label>
              <Form.Control as="select"  name="strsem" value={this.state.strsem} onChange={this.handleChange} required >
                {this.state.posts.map((post, index) =>

                  <option key={index}>{post.strsem}</option>

                )}
              </Form.Control>
            </Form.Group>

            <Button className="w-100" type="submit" onClick={this.onSubmit}>
              Complete Profile
          </Button>


          </Form> */}
        </Card.Body>
      </Card>
 
  </div>
    </>
  )
}

// export default ViewProfile
// class ViewProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       posts:[],
//       email:"",
//       strsem:"",
    
//   }
// }
// componentDidMount(){
//   this.getPosts();
// }
// handleChange=(e)=>{
//   const {name,value}=e.target;
//   this.setState({
//     ...this.state,
//     [name]:value,
//   });
// };
// onSubmit=(e)=>{
//   e.preventDefault();
//   const {email,strsem}=this.state;
//   const data={
//     email:email,
//     strsem:strsem,
//   }
// console.log(data);
// axios.post("http://localhost:3001/profile/add",data).then((res)=>{
//   if(res.data.success){
//     alert("Added");
//     this.setState({email:email,strsem:strsem});
//   }
// });
// };
// getPosts(){
//   axios.get("http://localhost:3001/classes").then(res=>{
//     if(res.data.success){
//       this.setState({
//         posts:res.data.posts,
//       });
//       console.log(this.state.posts[0]);
      
//   }})
// }

//   render(){
//     return 
//   };
// }

// export default ViewProfile