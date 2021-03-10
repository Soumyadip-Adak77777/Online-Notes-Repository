import React,{ useRef, useState,Component } from 'react'
import { Form, Button, Card, Alert} from "react-bootstrap"
import axios from "axios";


export default class CreateRepo extends Component {
  constructor(props) {
    super(props);
    this.state={
      posts:[]
    
  }
}
componentDidMount(){
  this.getPosts();
}

getPosts(){
  axios.get("http://localhost:3001/classes").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.posts,
      });
      console.log(this.state.posts[0]);
      
  }})
}

  render(){
    return <div>
    <h1>Create Repository</h1>
    <Card bg="dark" className="w-30">
<Card.Body>
  {/* <Form onSubmit={handleSubmit}> */}

    <Form.Group id="stream" >
    <Form.Label>Select Stream</Form.Label>
      <Form.Control as="select"  required >
     
      {this.state.posts.map((post,index)=>
                   
         <option key={index}>{post.stream}</option>
             
               ) }
      </Form.Control>
    </Form.Group>
    <Form.Group id="semester">
    <Form.Label>Select Semester</Form.Label>
      <Form.Control as="select"  required >
      {this.state.posts.map((post,index)=>
                   
                   <option key={index}>{post.semester}</option>
                       
                         ) }
      </Form.Control>
    </Form.Group>
    <Form.Group id="subjectcode">
    <Form.Label>Subject Code</Form.Label>
      <Form.Control type="text" placeholder="Subject Code here..." required />
    </Form.Group>
    <Button  className="w-100" type="submit">
      Add this Repository
    </Button>
  {/* </Form> */}
  
</Card.Body>
</Card>
</div>;
  };
}


// function CreateRepo() {
//     const [error, setError] = useState("")
//     async function handleSubmit(e) {
//         e.preventDefault()
    
//         if (1) {
          
//         }
    
//         try {
         
//         } catch {
         
//         }
    
        
//       }
    
//     return (
        
//     )
// }

// export default CreateRepo
