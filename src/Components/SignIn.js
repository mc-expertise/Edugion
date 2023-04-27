import React from 'react';
import imgbg from '../asset/20062457_world_arc_01[Converted]1.svg';

import MailForum from './MailForum';
import FooterMedia from './FooterMedia';
const SignIn = () => {
  return (
    <>
      <div className="w-full grid grid-cols-5 absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-6 ">
        <img src={imgbg} alt="" className="col-span-2 w-[100%]" />
        <div className="col-start-3 col-end-5 ml-8 space-y-8">
          <div className="mb-6">
            <h1 className="text-[#0B2445] text-[40px] font-semibold">
              Welcome back !
            </h1>
            <p className="text-[#474748] text-[24px] font-normal mt-[-15px]">
              Please enter your details.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <MailForum />
            <FooterMedia />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
