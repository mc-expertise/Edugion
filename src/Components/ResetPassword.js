import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmitForgetPw = (e) => {
    e.preventDefault();
    console.log(email);
    fetch('http://localhost:4000/forget-password', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegistre');
        alert(data.status);
      });
  };

  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-60%]">
      <form
        onSubmit={handleSubmitForgetPw}
        className="m-w-[600px] shadow-md p-20">
        <div className="mb-6">
          <h1 className="text-[#0B2445] text-[50px] font-semibold">
            Get You Password !
          </h1>
          <p className="text-[#474748] text-[28px] font-normal mt-[-15px]">
            Please enter your Email.
          </p>
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
          className=" w-full bg-transparent placeholder:text-black placeholder:text-[17px] py-4 border-b-2 border-black outline-none mb-10"
        />
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-[#0B2445] text-[20px] text-white w-[80%] p-3 rounded-xl ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
