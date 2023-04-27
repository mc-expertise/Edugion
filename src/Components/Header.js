import React from 'react';
import iconHeader from '../asset/edugion1.png';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  const handlout = () => {
    window.localStorage.clear();
    window.location.href = '/';
  };
  return (
    <>
      <div className="flex justify-between py-6  shadow-md">
        <img src={iconHeader} alt="icon" className="w-[60px] ml-6" />
        <div className="flex items-center gap-4 mr-6">
          {isLoggedIn == 'true' ? (
            <button>
              <a
                onClick={handlout}
                href="#"
                className="bg-white text-[#0B2445] border-[#0B2445] border-2 rounded-3xl py-2 px-6">
                Log Out
              </a>
            </button>
          ) : (
            <>
              <button>
                <a
                  href="/"
                  className="bg-white text-[#0B2445] border-[#0B2445] border-2 rounded-3xl py-2 px-6">
                  Sign In
                </a>
              </button>
              <button>
                <a
                  href="/signup"
                  className=" text-white bg-[#0B2445] rounded-3xl py-2 px-6">
                  Sign Up
                </a>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
