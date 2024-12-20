import PropsType from 'prop-types'

import './index.css'
import { useRef } from 'react';

export const UploadAvatar = ({ children, photo, setPhoto, photoRef }) => {
  const fileRef = useRef(null);

  const openFolder = () => {
    fileRef.current.click();
  };

  const changeFile = (e) => {
    
    if (photoRef.current) {
      URL.revokeObjectURL(photoRef.current);
      
      photoRef.current = null;
    }
    
    setPhoto(e.target.files[0]);
    photoRef.current = URL.createObjectURL(e.target.files[0]);
  };

  // eslint-disable-next-line no-unused-vars
  const photoUpload = () => {
    const formData = new FormData();

    formData.append('file', photo);

    try {
      console.log(formData);
    }
    catch (err) {
      console.log('Не удалось загрузить файл ', err);

      throw err;
    }
  }

  return (
    <div className='user__img'>
      <div className='user__img-content' onClick={openFolder}>
        <div className='user__img-inner'>
          {children}
        </div>
        <input ref={fileRef} type='file' className='upload-input' onChange={changeFile} accept='image/*' />
      </div>
    </div>
  )
}

UploadAvatar.propTypes = {
  children: PropsType.node.isRequired,
  photo: PropsType.node,
  setPhoto: PropsType.func,
  photoRef: PropsType.object
}