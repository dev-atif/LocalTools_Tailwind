import React from "react";

const Search = ({placeholder}) => {
  return (
    <div>
      <div className="bg-white py-3 px-4 rounded-lg flex  justify-between">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full  placeholder:text-sm placeholder:font-Robot placeholder:text-[#92929D] placeholder:font-normal
          outline-none"
        />
        <button className=" bg-transparent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.6829 4.6829C1.1057 8.2601 1.1057 14.0599 4.6829 17.6371C8.2601 21.2143 14.0599 21.2143 17.6371 17.6371C21.2143 14.0599 21.2143 8.2601 17.6371 4.6829C14.0599 1.1057 8.2601 1.1057 4.6829 4.6829ZM6.09712 6.09712C8.89327 3.30096 13.4267 3.30096 16.2229 6.09712C19.019 8.89327 19.019 13.4267 16.2229 16.2229C13.4267 19.019 8.89327 19.019 6.09712 16.2229C3.30096 13.4267 3.30096 8.89327 6.09712 6.09712Z"
              fill="#92929D"
            />
            <path
              d="M22.0943 20.2825L17.9649 16.153C17.0221 15.2102 15.6078 16.6244 16.5506 17.5672L20.6801 21.6967C21.6229 22.6395 23.0371 21.2253 22.0943 20.2825Z"
              fill="#92929D"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
