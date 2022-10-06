import React from 'react';
import { homeIcon, aboutIcon } from '../assets';
import { BiTime } from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
const MenuModal = () => {
  const { setMenuToggle } = useStateContext();
  const navigate = useNavigate();
  return (
    <div className="fixed w-full h-full z-[500] font-semibold">
      <div className="bg-[#f3f7fd] min-h-full border-[1px] border-solid border-white">
        <div className="flex justify-center  items-center gap-10 mt-24 ">
          <div
            className="flex flex-col items-center p-8 bg-white rounded-md"
            onClick={() => {
              navigate('/'), setMenuToggle(false);
            }}
          >
            <img src={homeIcon} alt="home" className="mb-2" />
            <span>მთავარი</span>
          </div>
          <div
            className=" flex flex-col items-center p-8 bg-white rounded-md"
            onClick={() => {
              navigate('/aboutus'), setMenuToggle(false);
            }}
          >
            <span>
              <img src={aboutIcon} alt="home" className="mb-2  " />
            </span>
            <span>შესახებ</span>
          </div>
        </div>
        <div className=" flex justify-start  working-time items-center bg-white gap-4  p-2 m-8">
          <BiTime className="w-14 h-auto bg-madart-orange p-2 rounded-xl" />

          <div>
            <span>სამუშაო საათები</span>
            <br />
            <span>09:00 დან 22:00 მდე</span>
          </div>
        </div>
        <div className=" flex justify-start  working-time items-center bg-white gap-4  p-2 m-8">
          <ImLocation className="w-14 h-auto bg-madart-orange p-2 rounded-xl" />
          <div>
            <span>ფილიალები</span>
            <br />
            <span>ხიზანიშვილის, 37</span>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className=" bg-white gap-4  p-2 m-8 rounded-md">032 2 19 29 19</div>{' '}
          <div className=" bg-white gap-4  p-2 m-8 rounded-md">sales.madart.ge</div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
