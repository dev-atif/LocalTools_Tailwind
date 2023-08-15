import * as React from "react"

function buyerAccount({props,className}) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={className}
        d="M12 0a6 6 0 100 12 6 6 0 000-12zM9 6a3 3 0 116 0 3 3 0 01-6 0zM19.5 15h-15A4.5 4.5 0 000 19.5c0 3.348 1.377 6.03 3.636 7.845C5.859 29.13 8.841 30 12 30c3.159 0 6.141-.87 8.364-2.655C22.62 25.53 24 22.848 24 19.5a4.5 4.5 0 00-4.5-4.5zm-15 3h15a1.5 1.5 0 011.5 1.5c0 2.451-.975 4.269-2.514 5.505C16.908 26.271 14.64 27 12 27c-2.64 0-4.908-.729-6.486-1.995C3.975 23.769 3 21.951 3 19.5A1.5 1.5 0 014.5 18z"
        fill="#000"
      />
    </svg>
  )
}

export default buyerAccount
