import React from 'react';

const TerminalBanner = ({ banner, className = "gradient-banner" }) => (
  <div className="banner-container mb-6 overflow-y-hidden overflow-x-auto">
    <pre className={`banner-text ${className} font-bold text-[0.5rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-lg select-none drop-shadow leading-[1.05] whitespace-pre min-w-max`}>
      {banner}
    </pre>
  </div>
);

export default TerminalBanner;