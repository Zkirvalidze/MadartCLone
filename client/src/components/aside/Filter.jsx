import React from 'react';
import { useStateContext } from '../../context/StateContext';
const Filter = () => {
  const { data } = useStateContext();
  return (
    <div className="w-[350px] bg-orange-50">
      <span>Category</span>
      <ul>
        {data?.map((item) => (
          <li>
            <span> {item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
