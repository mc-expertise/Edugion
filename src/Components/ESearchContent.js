import React from 'react';

const ESearchContent = () => {
  return (
    <div className="grid grid-cols-6 ">
      <div className="max-w-[337px] col-span-2 p-10 bg-[#F4F4F4] shadow rounded mt-10">
        <h1 className="text-center mb-10 text-[#0B2445] text-4xl font-bold">
          ESearch
        </h1>
        <p className="text-[15px]">
          Finally, in an extraordinarily simple way, find industry information
          at your fingertips.
          <br />
          <br /> Association, Award/Competition/Prize/Etc.,
          Building/Mural/Park/Show/Village/Etc., Call for Papers, Event, Higher
          Education, Library, Media, Museum, NewsRSS, Piggyback Event,
          Sponsorship, Tour, and Venue.
        </p>
      </div>
      <div className="col-start-3 col-end-7 p-10 mt-10">
        <h1 className="text-center mb-10 text-[#0B2445] text-3xl font-semibold">
          Start Your ESearch
        </h1>
        <div>
          <div className="flex items-center justify-center gap-6 mx-9 mb-10">
            <select
              name="Industry"
              id="Industry"
              className=" text-[17px] p-4 border-2 rounded-xl  border-black outline-none flex-grow">
              <option value="" disabled selected hidden>
                Industry(s): Select
              </option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <select
              name="Industry"
              id="Industry"
              className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow">
              <option value="" disabled selected hidden>
                Resource(s): Select
              </option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div className="flex items-center gap-6 mb-10">
            <select
              name="Industry"
              id="Industry"
              className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-2 flex-grow">
              <option value="" disabled selected hidden>
                Country(s)/Territory: Select
              </option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <select
              name="Industry"
              id="Industry"
              className=" text-[17px] p-4 border-2 rounded-2xl border-black outline-none flex-1">
              <option value="" disabled selected hidden>
                Region: Select
              </option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <select
              name="Industry"
              id="Industry"
              className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-2 flex-grow">
              <option value="" disabled selected hidden>
                Sub Region: Select
              </option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="max-w-[30%] bg-[#0B2445] text-white w-[80%] p-3 rounded-full ">
            <a href="#" target="_blank" className="text-[20px]">
              Search Results
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESearchContent;
