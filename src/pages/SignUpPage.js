import React from 'react';
import Header from '../components/Header';
import SignUp from '../components/SignUp';

function SignUpPage({ 
  onSubmit,
  onChangeEmail,
  onChangePassword,
  onChangePasswordCheck,
  onChangeMobile,
  onChangeName,
  onChangeNickname})
  {
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
}

export default SignUpPage;