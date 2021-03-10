import React,{Component} from 'react';
import axios from "axios";
import { Table,Button,Form,Card} from "react-bootstrap";
// function ViewNotes() {
//     return (
        
//     )
// }

// export default ViewNotes
export default class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
      posts:[]
    
  }
}
componentDidMount(){
  this.getPosts();
}
onDownload=(filename)=>{

  window.open(`http://localhost:3001/files/${filename}`)
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

filterContent(posts,searchTerm){
const result=posts.filter((post)=>
post.strsem.includes(searchTerm)
);
this.setState({posts:result});
}
handleSearch=(e)=>{
  console.log(e.target.value);
  const searchTerm=e.target.value;
  axios.get("http://localhost:3001/classes").then(res=>{
    if(res.data.success){
     this.filterContent(res.data.posts,searchTerm)
  }})
  // const {name,value}=e.target;
  // this.setState({
  //   ...this.state,
  //   [name]:value,
  // });
};

  render(){
    return <div>
    <h1>View Notes</h1>
    <Form>
    <Form.Group id="strsem" >
              <Form.Label>Select Your Stream with Semester</Form.Label>
              <Form.Control as="select"  name="strsem" value={this.state.strsem} onChange={this.handleSearch} required >
                <option>Select</option>
                {this.state.posts.map((post, index) =>

                  <option key={index}>{post.strsem}</option>

                )}
              </Form.Control>
            </Form.Group>
            </Form>
            <br/>
<Table striped bordered hover variant="dark">

  <thead>
    <tr>
      <th >Sl. No.</th>
      <th >Subject Code</th>
      <th >File Name</th>
      <th >Download</th>
    </tr>
   
  </thead>
  
  {  this.state.posts.map((post, index)=>
// if(post.strsem==this.state.strsem}{

        <tbody>
         <tr>
      <td>{index+1}</td>
      <td >{post.subcode}</td>
      <td >{post.filename}</td>
      <td ><Button variant="outline-success"  onClick={()=>this.onDownload(post.filename)}>Download</Button>{' '}</td>
      </tr>
      </tbody>
     

)}  
</Table>

</div>;
  };
}