import React from 'react';
import footImg1 from '../../src/assets/banner-main.png'
const Banner = () => {
    return (
      <div className="max-w-[1200px] mx-auto items-center text-center bg-[url(/src/assets/bg-shadow.png)] p-6 bg-[rgba(19,19,19,1)] rounded-3xl">
        <img src={footImg1} alt="" className="mx-auto" />
        <h1 className="text-[rgba(255,255,255,1)] font-bold text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[rgba(255,255,255,.7)] font-medium text-2xl">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn bg-[rgba(231,254,41,1)] rounded">
          Claim Free Credit
        </button>
      </div>
    )
};

export default Banner;