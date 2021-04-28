import React, {useState} from 'react'
import './Upload.css'
import Axios from 'axios'


function Upload(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);


  return (
    <div className="Upload">
      <h1>Create a Post</h1>
      <div className="UploadForm">
        <input type="text" placeholder="Title" onChange = {(event)=>{
          setTitle(event.target.value);
        }} />
        <input type="text" placeholder="Description" onChange = {(event)=>{
          setDescription(event.target.value);
        }} />
        <input type="file" />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Upload;
