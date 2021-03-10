import React,{Component} from 'react';
import axios from "axios";
import { Table,Button} from "react-bootstrap";
import { Redirect } from 'react-router';
var path = require('path');
// const formidable=require('formidable')
var mime=require('mime')
var fs=require('fs')
// import FileSaver,{saveAs} from 'file-saver';

// function ViewNotes() {
//     return (
        
//     )
// }

// export default ViewNotes
export default class ViewUploaded extends Component {
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
getPosts1(){
  axios.get("http://localhost:3001/classes").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.posts,
      });
      console.log(this.state.posts[0]);
      
  }})
}
onDelete=(id,filename)=>{
  alert(id+" File Deleted");
  axios.delete(`http://localhost:3001/classes/delete/${id}`).then((res)=>{
    // alert(filename+"Deleted successfully.");
    this.getPosts1();
    <Redirect to="http://localhost:3000/" />

  })
}

onDownload=(filename)=>{
  window.open(`http://localhost:3001/files/${filename}`)

}
    //  console.warn(filename)
    
  // <Redirect to="`http://localhost:3001/files/${filename}`" />
  // axios.get(`http://localhost:3001/files/${filename}`).then((res)=>{
  //   alert(filename+" File will be dowloaded");
  // })
 


                   


  render(){
    return <div>
    <h1>View Uploaded</h1>

<Table striped bordered hover variant="dark">

  <thead>
  <tr>
              <th >#</th>
              <th >Subject Code</th>
              <th >File Name</th>
              <th >Download</th>
              <th>Delete</th>
            </tr>
   
  </thead>
 
  {this.state.posts.map((post, index) =>


        <tbody>
          
         <tr>
      <td>{index+1}</td>
      <td >{post.subcode}</td>
      <td >{post.filename}</td>
      <td ><Button  variant="outline-success" onClick={()=>this.onDownload(post.filename)}>Download</Button>{' '}</td>
     
      <td ><Button variant="outline-danger" onClick={()=>this.onDelete(post._id)}>Delete</Button>{' '}</td>
      </tr>

      </tbody>
     
 
 )}  
</Table>

</div>;
  };
}
