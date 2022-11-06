import React, {useState} from 'react';

import axios from 'axios';

const CTA = () => {
  const [file, setFile] = useState()
function handleChange(event) {
  setFile(event.target.files[0])
}

function handleSubmit(event) {
  event.preventDefault()
  const url = 'http://localhost:3000/uploadFile';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', file.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  axios.post(url, formData, config).then((response) => {
    console.log(response.data);
  });

}

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <h1>Upload</h1>
      <input className='upload' type="file" onChange={handleChange}/>
      
    </form>
</div>
  )
}

export default CTA