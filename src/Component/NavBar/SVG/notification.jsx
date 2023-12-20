import * as React from "react"

function notification({props,className}) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.255 4.024a4.572 4.572 0 00-9.078 0A11.007 11.007 0 002.71 14.054v7.646L.165 26.742a1.524 1.524 0 001.36 2.21h7.88a4.573 4.573 0 008.622 0h7.88a1.524 1.524 0 001.36-2.21l-2.545-5.043v-7.646c0-4.46-2.653-8.3-6.467-10.03zm-4.54 24.928h-.013.027-.013zm8.122-6.204l1.593 3.157H4.002l1.593-3.157c.107-.213.163-.448.163-.686v-8.01a7.958 7.958 0 1115.916 0v8.01c0 .238.056.473.163.686z"
        fill="#000"
      />
    </svg>
  )
}

export default notification
