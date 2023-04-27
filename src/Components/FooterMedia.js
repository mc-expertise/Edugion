import React from 'react';
import imgmedia from '../asset/Group156.png';
import { useLocation } from 'react-router-dom';
const FooterMedia = () => {
  const location = useLocation();
  return (
    <>
      <div className="text-center pb-3">
        <p>or continue with</p>
        <img src={imgmedia} alt="" className="m-auto cursor-pointer" />
        {location.pathname === '/signup' ? (
          <p>
            Have an account?{' '}
            <a href="/" className="underline">
              Sign in
            </a>
          </p>
        ) : (
          <p>
            You don't Have an account?{' '}
            <a href="/signup" className="underline">
              Sign Up
            </a>
          </p>
        )}
      </div>
    </>
  );
};

export default FooterMedia;
