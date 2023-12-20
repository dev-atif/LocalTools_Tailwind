import * as React from "react"

function logout({props,className}) {
    return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            className={className}
            d="M6.966 2.951L8.84 5.628a13.067 13.067 0 1014.987 0L25.7 2.951a16.313 16.313 0 016.967 13.382c0 9.021-7.313 16.334-16.334 16.334C7.313 32.667 0 25.354 0 16.333A16.314 16.314 0 016.966 2.951zM14.7 16.333V0h3.267v16.333H14.7z"
            fill="#000"
          />
        </svg>
      )
}

export default logout
