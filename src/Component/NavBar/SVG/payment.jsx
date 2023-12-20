import * as React from "react"

function payment({props,className}) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 34 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={className}
        d="M27.818 15.625v-12.5c0-1.719-1.39-3.125-3.09-3.125H3.09C1.39 0 0 1.406 0 3.125v12.5c0 1.719 1.39 3.125 3.09 3.125h21.637c1.7 0 3.091-1.406 3.091-3.125zm-3.09 0H3.09v-12.5h21.636v12.5zM13.908 4.687c-2.565 0-4.636 2.094-4.636 4.688s2.07 4.688 4.636 4.688c2.565 0 4.636-2.094 4.636-4.688s-2.07-4.688-4.636-4.688zm20.091 0v17.188C34 23.594 32.61 25 30.91 25H4.635v-3.125H30.91V4.687H34z"
        fill="#000"
      />
    </svg>
  )
}

export default payment
