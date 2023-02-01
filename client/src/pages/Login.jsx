import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { FormControl } from '../components';
import { useMutation } from '@tanstack/react-query';
import { facebookIcon, googleIcon, registrationIcon } from '../assets';
import { postUser } from '../lib/client';
import {
  LocalAuthButton,
  SocMediaAuthButton,
} from '../components/shareable/Buttons';

import * as Yup from 'yup';
import {
  LOGIN_HEADER_TEXT,
  INPUT_LABEL1,
  INPUT_LABEL2,
  IFNOT_REGISTERED_TEXT,
  AUTH_TYPE1,
  AUTH_TYPE2,
} from '../data/constants';
import { useStateContext } from '../context/StateContext';
const Login = () => {
  let navigate = useNavigate();
  const {authType} = useStateContext()
  const phoneOrMailRegex = /^(\+?995)?(79\d{7}|5\d{8}|\S+@\S+\.\S+)$/;
  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(phoneOrMailRegex, 'mail or phone incorrect')
      .required('required!'),
    password: Yup.string()
      .required('required!')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  const addUserMutation = useMutation(postUser, {
    onSuccess: (res) => {
      if (res.message === 'Successfully Authenticated' && res.success === true)
        navigate('/');
    },
  });


  const onSubmit = ({ phone, password }) => {
    
    addUserMutation.mutate({ phone, password, authType });
  };

  const initialValues = { phone: '', password: '' };

  return (
    <div className="flex justify-center items-start bg-gray-100 h-screen">
      <div className="w-[471px] h-auto mt-24 bg-white registration-form">
        <div className="flex justify-start items-center  registration-head ">
          <img src={registrationIcon} alt="reg_icon" className="m-5" />
          <div>
            <p className="font-bold">{AUTH_TYPE1}</p>
            <p className="text-gray-500">{LOGIN_HEADER_TEXT}</p>
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
                  label={INPUT_LABEL1}
                  value={props.values.phone}
                />
                <FormControl
                  name={'password'}
                  label={INPUT_LABEL2}
                  value={props.values.password}
                />

                <LocalAuthButton
                  authAction={'register'}
                  buttonName={AUTH_TYPE2}
                />

                <LocalAuthButton authAction={'login'} buttonName={AUTH_TYPE1} />
              </Form>
            )}
          </Formik>

          <div className="text-center">
            <p className=" my-2 text-[#8b9aa7]">{IFNOT_REGISTERED_TEXT}</p>
            <Link to="#" className="text-blue-500">
              {AUTH_TYPE2}
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
