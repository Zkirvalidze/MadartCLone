import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormControl = ({ name, label, value}) => {
 
  return (
    <div className="relative mt-8 form-control">
      <Field
        type="text"
      
        name={name}
        
        className=" border-solid border-2 rounded-md border-[#dae3f0] h-16 w-full outline-none  focus-within:border-madart-orange registration-input "
      />
      <ErrorMessage name={name} />
      <label
        style={value.length>0 ?{ top: '-11px', fontSize: '13px', color: '#ffbb00'}:{}}
        htmlFor={name}
        className="text-[#8b9aa7] absolute  top-[20px] left-[42px] registration-label bg-white px-2   transition-all   pointer-events-none "
      >
        {label}
      </label>
    </div>
  );
};

export default FormControl;
