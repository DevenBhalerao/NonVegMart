import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useSelector } from 'react-redux';
import Axios from 'axios';
function FileUpload(props) {
  const [Images, setImages] = useState([]);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
      Authorization: 'Bearer ' + userInfo.token,
    };
    formData.append('file', files[0]);
    //console.log(formData);
    //save the Image we chose inside the Node Server
    Axios.post('/api/products/uploadImage', formData, config).then((res) => {
      console.log('in fileupload');
      console.log(res);
      if (res.data.success) {
        console.log('success');
        setImages([...Images, res.data.fileName]);
        props.refreshFunction([...Images, res.data.fileName]);
      } else {
        //console.log(response);
        alert('Failed to save the Image in Server');
      }
    });
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '300px',
              height: '240px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: 'flex',
          width: '350px',
          height: '240px',
          overflowX: 'scroll',
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={`http://localhost:5000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
