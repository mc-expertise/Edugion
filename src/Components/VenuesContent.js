import React from 'react';

const VenuesContent = () => {
  return (
    <div>
      <div className="grid grid-cols-6 ">
        <div className="max-h-[377px] max-w-[337px] col-span-2 p-10 bg-[#F4F4F4] shadow rounded-2xl mt-10">
          <h1 className="text-center mb-10 text-[#0B2445] text-4xl font-bold">
            Venues
          </h1>
          <p className="text-[15px]">
            Find a venue based on your needs.
            <br />
            <br />
            Venues are any type used for industry related events. The filters
            allow you to refine your search in ways always desired.
          </p>
        </div>
        <div className="col-start-3 col-end-7 p-10 mt-10">
          <h1 className="text-center mb-10 text-[#0B2445] text-3xl font-semibold">
            Start Your Venues
          </h1>
          <div>
            <div className="flex items-center justify-center gap-6 mx-9 mb-10">
              <select
                name="Industry"
                id="Industry"
                className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow">
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
              <select
                name="Industry"
                id="Industry"
                className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow">
                <option value="" disabled selected hidden>
                  Industry(s): Select
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
            <div className="flex items-center gap-6 mx-9 mb-10">
              <select
                name="Industry"
                id="Industry"
                className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow">
                <option value="" disabled selected hidden>
                  Country(s)/Territory: Select
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
              <select
                name="Industry"
                id="Industry"
                className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow">
                <option value="" disabled selected hidden>
                  Country(s)/Territory: Select
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
              <select
                name="Industry"
                id="Industry"
                className=" text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow">
                <option value="" disabled selected hidden>
                  Region: Select
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
            <div className="mx-9">
              <textarea
                name="Message"
                id="Message"
                class="text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow"
                rows="2"
                placeholder="Your message"></textarea>

              <textarea
                name="Message"
                id="Message"
                class=" ml-6 text-[17px] p-4 border-2 rounded-xl border-black outline-none flex-grow"
                rows="2"
                placeholder="Your message"></textarea>
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
    </div>
  );
};

export default VenuesContent;
