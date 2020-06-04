import Axios from 'axios';

function uploadFile(file, signedRequest, url) {
  console.log('in upload file');
  Axios.put(signedRequest, file).then((response) => {
    if (response.data.success) {
      //console.log(response);
    } else {
      // console.log(response);
    }
  });
}

function getSignedRequest(file) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        uploadFile(file, response.signedRequest, response.url);
      } else {
        alert('Could not get signed URL.');
      }
    }
  };
  xhr.send();
}

export { getSignedRequest, uploadFile };
