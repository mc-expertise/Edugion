import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Validation from './Validation';

const MailForum = () => {
  const [AType, setAType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');

  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmailOrPassword, setErrorEmailOrPassword] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const location = useLocation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      AType: AType,
      email: email,
      password: password,
      cpassword: cpassword,
      country: country,
      year: year,
      gender: gender,
    };

    if (location.pathname === '/signup') {
      if (password === cpassword) {
        fetch('http://localhost:4000/register', {
          method: 'POST',
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, 'userRegistre');
            if (data.status === 'ok') {
              alert('Your account has been created ');
              window.location.href = './';
            }
          });
        setErrorMessage('');
        console.log(formData);
      } else {
        setErrorMessage('Passwords do not match');
      }
    } else {
      fetch('http://localhost:4000/loginuser', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, 'userRegistre');
          if (data.status === 'ok') {
            window.localStorage.setItem('token', data.data);
            window.localStorage.setItem('loggedIn', true);
            setShowValidation(true);
            const validation = () => {
              window.location.href = './esearch';
              if (location.pathname === '/esearch') {
                setShowValidation(false);
              }
            };

            setTimeout(validation, 1000);
          } else if (data.error === 'User Not Found') {
            setErrorEmailOrPassword('Your email or password incorrect');
          }
        });
      setErrorMessage('');
    }
  };

  const yearOptions = () => {
    const startYear = 1921;
    const currentYear = new Date().getFullYear(); // Obtenir l'année actuelle
    const years = Array.from(
      { length: currentYear - startYear + 1 },
      (v, i) => currentYear - i
    ); // Générer un tableau d'années à partir de l'année actuelle jusqu'à 10 ans en arrière

    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let url = 'https://restcountries.com/v2/all';
        let res = await fetch(url);
        let data = await res.json();

        setCountries(data);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    };
    fetchCountries();
  }, []);
  return (
    <>
      {showValidation === true ? (
        <Validation />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          {location.pathname === '/signup' ? (
            <div className="flex flex-col text-[17px] w-[65%] mb-4">
              <label for="type-select" className="mb-3">
                Account Type
              </label>
              <select
                onChange={(e) => setAType(e.target.value)}
                name="accountType"
                id="type-select"
                required
                className="py-3 px-2 border-2 border-black rounded-xl">
                <option value="User">General User</option>
                <option value="Business">Business</option>
                <option value="Administration">Education Administration</option>
                <option value="Students">Education Students</option>
              </select>
            </div>
          ) : (
            ''
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            className="placeholder:text-black placeholder:text-[17px] py-2 border-b-2 border-black outline-none mb-10"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
            placeholder="Password"
            className="placeholder:text-black placeholder:text-[17px] py-2 border-b-2 border-black outline-none mb-5"
          />
          <p className="text-red-600 font-semibold text-[17px]">
            {errorEmailOrPassword}
          </p>
          {location.pathname === '/signup' ? (
            <>
              <div className="flex flex-col space-y-5">
                <input
                  onChange={(e) => setCPassword(e.target.value)}
                  type="password"
                  value={cpassword}
                  required
                  placeholder="Confirm password"
                  className="placeholder:text-black placeholder:text-[17px] py-2 border-b-2 border-black outline-none"
                />
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  name="accountType"
                  id="Country"
                  required
                  className=" text-[17px] py-2 border-b-2 border-black outline-none">
                  <option value="" disabled selected hidden>
                    Country
                  </option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <select
                  onChange={(e) => setYear(e.target.value)}
                  name="accountType"
                  required
                  id="Year"
                  className=" text-[17px] py-2 border-b-2 border-black outline-none">
                  <option value="" disabled selected hidden>
                    Year of Birth
                  </option>
                  {yearOptions()}
                </select>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  name="accountType"
                  required
                  id="gender"
                  className=" text-[17px] py-2 border-b-2 border-black outline-none">
                  <option value="" disabled selected hidden>
                    To which gender identity
                  </option>
                  <option value="Female">Female</option>
                  <option value="Gender Variant/Non-Comforming">
                    Gender Variant/Non-Comforming
                  </option>
                  <option value="Male">Male</option>
                  <option value="No List">Not List</option>
                  <option value="Perfer Not To Answer">
                    Perfer Not To Answer
                  </option>
                  <option value="Transgender Femal">Transgender Female</option>
                  <option value="Transgender Male">Transgender Male</option>
                </select>
              </div>
            </>
          ) : (
            <p className="text-right">
              <a href="/reset" className="underline">
                Forget Password
              </a>
            </p>
          )}
          {location.pathname === '/signup' ? (
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-[#0B2445] text-[20px] text-white w-[80%] p-3 rounded-xl ">
                Sign Up
              </button>
            </div>
          ) : (
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-[#0B2445] text-[20px] text-white w-[80%] p-3 rounded-xl ">
                Sign in
              </button>
            </div>
          )}
          {errorMessage && (
            <p className="m-auto p-2 text-red-600 font-bold">{errorMessage}</p>
          )}
        </form>
      )}
    </>
  );
};

export default MailForum;
