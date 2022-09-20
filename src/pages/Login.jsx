import React from 'react';
import { Link } from 'react-router-dom';

import { facebookIcon, googleIcon, registrationIcon } from '../assets';
const Login = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };
  const logOut = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
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
          <div className="relative ">
            <input
              type="text"
              autoComplete="off"
              required
              name="phone"
              className=" border-solid border-2 rounded-md border-[#dae3f0] h-16 w-full outline-none  focus-within:border-madart-orange registration-input  "
            />
            <label className="text-[#8b9aa7] absolute  top-[20px] left-[42px] registration-label bg-white px-2 transition-all  ">
              ტელეფონის ნომერი
            </label>
          </div>
          <div className="relative mt-6 ">
            <input
              style={{ textAlign: 'center' }}
              type="text"
              autoComplete="off"
              required
              name="password"
              className=" border-solid border-2 rounded-md border-[#dae3f0] h-16 w-full  outline-none focus:border-madart-orange   registration-input "
            />
            <label
              className="text-[#8b9aa7] absolute  top-[20px] left-[42px]  registration-label bg-white px-2 transition-all
           "
            >
              პაროლი
            </label>
          </div>
          <button className="w-full h-16 bg-madart-orange rounded-md my-6 px-6">
            ავტორიზაცია
          </button>
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
                onClick={google}
              >
                <img src={googleIcon} alt="google-icon" className="w-8 h-8" />
                <p className="text-xl pl-6 :">Google</p>
              </button>
              <button
                className="flex justify-start items-center  border-solid border-1 p-2 my-4 rounded-md border-[#dae3f0] w-1/2 bg-[#385499]"
                onClick={() => {}}
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
