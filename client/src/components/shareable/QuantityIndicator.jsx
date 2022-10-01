import React from 'react';
import { useStateContext } from '../../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const QuantityIndicator = ({quantity,decQty,incQty}) => {

  return (
    <p className=" flex justify-center items-center  quantity-desc  ">
      <span
        className="text-red-400 p-1 minus"
        onClick={decQty}
      >
        <AiOutlineMinus />
      </span>
      <span className="num px-4 ">{quantity}</span>
      <span
        className=" text-green-400 p-1 plus"
        onClick={incQty}
      >
        <AiOutlinePlus />
      </span>
    </p>
  );
};

export default QuantityIndicator;
