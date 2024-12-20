import './index.css'

import { useEffect, useRef, useState } from 'react'

import { UploadAvatar, UserFormContent, useUpdateUserMutation } from '../../../features/user';
import { useAuth } from '../../../shared/lib/hooks/isAuth'
import { Container, Wrapper, Section, FormWrapper, Button, FormMessagesWrapper } from '../../../shared/ui'

export const Home = () => {
  const { isAuth, userData, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    avatar: '',
    username: '',
    last_name: '',
    first_name: '',
    email: ''
  });
  const [photo, setPhoto] = useState('');
  const photoRef = useRef(null);

  useEffect(() => {
    setFormData({
      avatar: userData?.avatar,
      username: userData?.username,
      last_name: userData?.last_name,
      first_name: userData?.first_name,
      email: userData?.email
    });
  }, [userData]);

  const { data, isError, isLoading: updateLoading, isSuccess, error, update } = useUpdateUserMutation();

  const submit = async (e) => {
    e.preventDefault();

    const { username, last_name, first_name, email } = formData;

    const data = {
      avatar: photo,
      username,
      last_name,
      first_name,
      email
    }

    try {
      await update(data);
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }

  if (!isAuth) {
    return null;
  }

  return (
    <Section cl={"section-full section-home"}>
      <Container>
        <Wrapper>
          {isLoading && <div>Загрузка...</div>}
          {!isLoading && (
            <FormWrapper cl={'user__form'} handleSubmit={submit}>
              <FormMessagesWrapper>
                {isSuccess && <p className='user__form-success'>{data.message}</p>}
                {isError && <p className='user__form-error'>{error}</p>}
              </FormMessagesWrapper>
              <div className='user__form-inner'>
                <UploadAvatar setPhoto={setPhoto} photo={photo} photoRef={photoRef}>
                  <img className='avatar' src={photoRef.current ? photoRef.current : userData.avatar} alt={formData?.username} />
                </UploadAvatar>
                <UserFormContent data={formData} setData={setFormData}>
                  <Button type={'submit'}>{updateLoading ? 'Обновляем...' : 'Сохранить'}</Button>
                </UserFormContent>
              </div>
            </FormWrapper>
          )}
        </Wrapper>
      </Container>
    </Section>
  )
}
