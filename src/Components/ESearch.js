import React, { useEffect } from 'react';
import Paragraph from './Paragraphe';
import BarMenu from './BarMenu';

const ESearch = () => {
  useEffect(() => {
    fetch('http://localhost:4000/userdata', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ token: window.localStorage.getItem('token') }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userData');
        if (data.data == 'token expired') {
          alert('Your Session is Expired');
          window.localStorage.clear();
          window.location.href = './';
        }
      });
  });
  return (
    <>
      <div className="w-[70%] m-auto absolute mt-8 left-[50%] translate-x-[-50%]">
        <Paragraph />
        <BarMenu />
      </div>
    </>
  );
};

export default ESearch;
