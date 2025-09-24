import React from 'react'
import footImg from '../../../src/assets/banner-main.png'

const Footer = () => {
  return (
    <section className=" bg-[rgba(6,9,26,1)] text-white mt-16  relative">
      <div className="max-w-[1200px] mx-auto ">
        <div className="md:pt-28 pt-40">
          <img src={footImg} alt="" className="mx-auto md:w-[10%] w-[20%] " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 p-2">
          <div>
            <h3 className='font-bold'>About us</h3>
            <p className="text-xs text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="">
            <h1 className='font-bold'>quicks Links</h1>
            <ul className="flex flex-col gap-5.5 font-bold text-xs text-gray-400 ">
              <li>
                <a href="" className="hover:text-rose-800">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-rose-800">
                  Fixture
                </a>
              </li>
              <li>
                <a href="" className="hover:text-rose-800">
                  Teams
                </a>
              </li>
              <li>
                <a href="" className="hover:text-rose-800">
                  Schedule
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>subscribes </h3>
            <p className="text-xs text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-[rgba(255,255,255,1)] text-[rgba(19,19,19,0.4)] p-2 rounded-l-xl outline-none"
              />
              <button className="md:px-8 px-5 md:py-3.5 bg-gradient-to-r from-[#FE9F30] to-[#E05c51] rounded-r-xl ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center bg-[rgba(255,255,255,.15)]">
        <small>@2024 Your Company All Rights Reserved.</small>
      </div>
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 shadow-lg sm:w-[60%] md:w-[1200px] p-2.5 border-2 border-[rgba(255,255,255,1)] rounded-lg">

        <div className="max-w-[1200px] mx-auto items-center bg-white text-center bg-[url(/src/assets/bg-shadow.png)] rounded-lg p-3.5 ">
          <div className="text-black">
            <h3 className='text-xs'>Subscribe to our Newsletter </h3>
            <p className="text-xs">
              Get the latest updates and news right in your inbox!
            </p>
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-[rgba(255,255,255,1)] text-[rgba(19,19,19,0.4)] p-1 md:p-2 rounded-lg md:rounded-l-xl outline-none border mr-3.5 mt-2"
            />
            <button className="md:px-8 md:py-2.5 btn bg-gradient-to-r from-[#FE9F30] to-[#E05c51] md:rounded-r-xl rounded-sm mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
