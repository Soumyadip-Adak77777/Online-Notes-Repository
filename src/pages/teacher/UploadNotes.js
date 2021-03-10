import React,{ Component } from 'react'
import { Form, Button, Card, Alert} from "react-bootstrap"
import axios from "axios"
import { Redirect } from 'react-router';
// import firebase from '../../firebase'


 class UploadNotes extends Component {
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.fileInput=React.createRef();
      this.state={
        strsem:"",
        subcode:"",
        filename:"",
      
      };
    };
handleSubmit(event){
  event.preventDefault();
  alert(`Selected file - ${this.fileInput.current.files[0].name}`)
};
  // fileupload(){
  //   const input = document.getElementById('file')
  //   const file = input.files[0]
  //   const formData = new FormData()
  //   formData.append(input.id, file)
  //   const response = axios.post('http://localhost:3001/files/uploadnotes/', {
  //      method: 'POST',
  //      headers: {},
  //      body: formData
  //   })
  // }
  handleChange=(e)=>{
    const {name,value}=e.target;
    this.setState({
      ...this.state,
      [name]:value,
    });
      };


  //  handleChange1 = (files) => {
  //    this.setState({
  //      files: files
  //    })
  //  };

  //  hendleSave = () => {
  //    let bucketName = 'uploads'
  //    let file = this.state.files[0]
  //    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
  //    let uploadTask = storageRef.put(file)
  //    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
  //      let downloadURL = uploadTask.snapshot.downloadURL
  //    })
  //  }

onSubmit=(e)=>{
  e.preventDefault();
  const {strsem,subcode,filename}=this.state;
  const data={
    strsem:strsem,
    subcode:subcode,
  filename:filename
  }
console.log(data);
axios.post("http://localhost:3001/classes/add",data).then((res)=>{
  if(res.data.success){
    alert("Added");
    this.setState({strsem:strsem,subcode:subcode,filename:filename});
    window.location.replace("http://localhost:3000/");
     }
 });
 

};
  render() {
    return (
      <div>
            <h1>Upload Notes</h1>
            <Card bg="dark" className="w-30">
        <Card.Body>
          <Form >

            <Form.Group id="strsem" >
            <Form.Label>Select Stream with Semester</Form.Label>
              <Form.Control as="select" name="strsem" value={this.state.strsem} onChange={this.handleChange} required >
                <option>Select</option>
              <option>MCA, Sem-1</option>
              <option>MCA, Sem-2</option>
              <option>MCA, Sem-3</option>
              <option>MCA, Sem-4</option>
              <option>MCA, Sem-5</option>
              <option>MCA, Sem-6</option>
              <option>BCA, Sem-1</option>
              <option>BCA, Sem-2</option>
              <option>BCA, Sem-3</option>
              <option>BCA, Sem-4</option>
              <option>BCA, Sem-5</option>
              <option>BCA, Sem-6</option>
              </Form.Control>
            </Form.Group>
            <Form.Group id="subcode"  >
            <Form.Label>Enter Subject Code(Eg.-MCA401)</Form.Label>
            <Form.Control  name="subcode"  type="text" value={this.state.subcode} onChange={this.handleChange} placeholder="Enter Subject code(in Capital Letters)" />
            </Form.Group>
            
            
            <form onSubmit={this.handleSubmit}  action="http://localhost:3001/files/uploadnotes/" method="POST" enctype="multipart/form-data"><input type="file" name="file" ref={this.fileInput}/>  <input  type="submit"  value="Upload" /></form>
            <Form.Group id="filename"  >
            <Form.Label>Confirm your file name(Extension mandetory Eg.Java.pdf)</Form.Label>
            <Form.Control  name="filename"  type="text" value={this.state.filename} onChange={this.handleChange} placeholder="Enter title as filename with *extension" />
            </Form.Group>
           
           <br/>
            <Button varient="primary" onClick={this.onSubmit} >
            Submit
            </Button>
          </Form>
         
         
        </Card.Body>
      </Card>
        </div>
    )
  }
}  



export default UploadNotes
