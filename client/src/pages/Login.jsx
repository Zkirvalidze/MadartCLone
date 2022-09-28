import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { facebookIcon, googleIcon, registrationIcon } from '../assets';
import { postUser, authStrategy } from '../lib/client';
import { Formik, Form } from 'formik';
import { FormControl } from '../components';
import {
  LocalAuthButton,
  SocMediaAuthButton,
} from '../components/shareable/Buttons';
import { useStateContext } from '../context/StateContext';
import * as Yup from 'yup';

const Login = () => {
  const INPUTLABEL1 = ' ტელეფონის ნომერი';
  const INPUTLABEL2 = 'პაროლი ';
  const LOGIN_BTN_VALUE = 'ავტორიზაცია';
  const REGISTER_BTN_VALUE = 'რეგისტრაცია';
  const { authType } = useStateContext();
  let navigate = useNavigate();

  const phoneOrMailRegex = /^(\+?995)?(79\d{7}|5\d{8})|\S+@\S+\.\S+$/;

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(phoneOrMailRegex, 'mail or phone incorrect')
      .required('required!'),
    password: Yup.string()
      .required('required!')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  const initialValues = { phone: '', password: '' };

  const onSubmit = ({ phone, password }) => {
    postAuthAction(phone, password, authType);
  };

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
            validateOnChange={false}
            validateOnBlur={false}
          >
            {(props) => (
              <Form>
                <FormControl
                  name={'phone'}
                  label={INPUTLABEL1}
                  value={props.values.phone}
                />
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
              <SocMediaAuthButton strategy={'google'} iconSrc={googleIcon} />
              <SocMediaAuthButton
                strategy={'facebook'}
                iconSrc={facebookIcon}
                style={'bg-[#385499] text-white'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
