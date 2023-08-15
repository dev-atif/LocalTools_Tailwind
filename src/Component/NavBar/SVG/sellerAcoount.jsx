import * as React from "react"

function sellerAccount({props,className,}) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 30 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={className}
        d="M27 6h-6V3l-3-3h-6L9 3v3H3C1.35 6 0 7.35 0 9v7.5c0 1.125.6 2.07 1.5 2.595V24c0 1.665 1.335 3 3 3h21c1.665 0 3-1.335 3-3v-4.92c.885-.525 1.5-1.485 1.5-2.58V9c0-1.65-1.35-3-3-3zM12 3h6v3h-6V3zM3 9h24v7.5h-7.5V12h-9v4.5H3V9zm13.5 9h-3v-3h3v3zm9 6h-21v-4.5h6V21h9v-1.5h6V24z"
        fill="#000"
      />
    </svg>
  )
}

export default sellerAccount
