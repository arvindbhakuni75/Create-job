import React, { Children } from 'react';

const Tooltip = ({ children, tooltip}) => {
  return (
    <div className='group relative inline-block z-10'>
        {children}
        <span className='invisible group-hover:visible  group-hover:opacity-100 transition bg-black-500 text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap z-10'>
            {tooltip}
        </span>
    </div>
  );
};

export default Tooltip;