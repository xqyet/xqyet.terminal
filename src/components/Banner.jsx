import React from 'react';

const Banner = ({ gdgBanner }) => (
  <pre
    className="hidden sm:block mb-2 w-full text-left font-bold text-[0.70rem] sm:text-xs md:text-base lg:text-lg text-blue-400 select-none drop-shadow leading-[1.05] whitespace-pre-wrap"
    style={{
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      margin: 0,
      padding: 0,
    }}
  >
    {gdgBanner}
    <span className="block mt-2 mb-2 text-pink-300 font-bold text-left text-[0.70rem] sm:text-xs md:text-base">
      Google Developer Groups on campus - VIT Mumbai
    </span>
  </pre>
);

export default Banner;
