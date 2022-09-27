import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { facebookIcon, googleIcon, registrationIcon } from '../assets';
import { postUser, authStrategy } from '../lib/client';
import { Formik, Form } from 'formik';
import { FormControl } from '../components';
import { LocalAuthButton } from '../components/Buttons';
import { useStateContext } from '../context/StateContext';
import * as Yup from 'yup';

const Login = () => {
  const INPUTLABEL1 = ' ტელეფონის ნომერი';
  const INPUTLABEL2 = 'პაროლი ';
  const LOGIN_BTN_VALUE = 'ავტორიზაცია';
  const REGISTER_BTN_VALUE = 'რეგისტრაცია';
  const { authType } = useStateContext();

  const phoneRegex = !/^(\+?995)?(79\d{7}|5\d{8})$/;

  const validationSchema = Yup.object({
    phone: Yup.string().email('invalid email format').required('required!'),
    password: Yup.string().required('required!'),
  });

  const initialValues = { phone: '', password: '' };

  const onSubmit = ({ phone, password }) => {
    postAuthAction(phone, password, authType);
  };

  let navigate = useNavigate();

  const postAuthAction = (user, psw, authAction) => {
    postUser(user, psw, authAction).then((res) => {
      if (
        res.data.message === 'Successfully Authenticated' &&
        res.status === 200
      ) {
        navigate('/');
      }
      console.log(res);
    });
  };

  return (
    <div className="flex justify-center items-start bg-gray-100 h-screen">
      <div className="w-[471px] h-auto mt-24 bg-white registration-form">
        <div className="flex justify-start items-center  registration-head ">
          <img src={registrationIcon} alt="reg_icon" className="m-5" />
          <div>
            <p className="font-bold">ავტორიზაცია</p>
            <p className="text-gray-500">სისტემაში შესვლა</p>
          </div>
        </div>
        <div className="  px-8 registration-body ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {(props) => (
              <Form>
                <FormControl name={'phone'} label={INPUTLABEL1} value={props.values.phone} />
                <FormControl
                  name={'password'}
                  label={INPUTLABEL2}
                  value={props.values.password}
                />

                {/* <LocalAuthButton
                authAction={'register'}
                buttonName={REGISTER_BTN_VALUE}
              /> */}

                <LocalAuthButton
                  authAction={'login'}
                  buttonName={LOGIN_BTN_VALUE}
                  />
            
              </Form>
            )}
          </Formik>

          <div className="text-center">
            <p className=" my-2 text-[#8b9aa7]">
              თუ არ ხართ დარეგისტრირებული გაიარეთ
            </p>
            <Link to="#" className="text-blue-500">
              რეგისტრაცია
            </Link>
            <br />
            <Link to="#" className="text-blue-500">
              პაროლის აღდგენა
            </Link>
            <div className="flex gap-2">
              <button
                className="flex justify-start items-center  border-solid border-2 p-2 my-4 rounded-md border-[#dae3f0] w-1/2"
                onClick={() => authStrategy('google')}
              >
                <img src={googleIcon} alt="google-icon" className="w-8 h-8" />
                <p className="text-xl pl-6 :">Google</p>
              </button>
              <button
                className="flex justify-start items-center  border-solid border-1 p-2 my-4 rounded-md border-[#dae3f0] w-1/2 bg-[#385499]"
                onClick={() => authStrategy('facebook')}
              >
                <img
                  src={facebookIcon}
                  alt="facebook-icon"
                  className="w-8 h-8"
                />
                <p className="text-xl pl-6 text-white ">Facebook</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
