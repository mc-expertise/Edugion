import React from 'react';
import imgbg from '../asset/20062457_world_arc_01[Converted]1.svg';
import MailForum from './MailForum';
import FooterMedia from './FooterMedia';

const SignUp = () => {
  return (
    <>
      <div className="w-full grid grid-cols-5 absolute  ml-6 mt-8 ">
        <img src={imgbg} alt="" className="col-span-2 w-[100%]" />
        <div className="col-start-3 col-end-5 ml-8">
          <div className="mb-6">
            <h1 className="text-[#0B2445] text-[40px] font-semibold">
              Create an Account
            </h1>
            <p className="text-[#474748] text-[24px] font-normal mt-[-15px]">
              Let's get Started !
            </p>
          </div>

          <MailForum />
          <FooterMedia />
        </div>
      </div>
    </>
  );
};

export default SignUp;
