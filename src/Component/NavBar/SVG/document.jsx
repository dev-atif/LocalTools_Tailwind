import * as React from "react"

function document({props,className}) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={className}
        d="M21.107 7.821l-7.5-7.5C13.393.107 13.18 0 12.857 0H2.143A2.15 2.15 0 000 2.143v25.714A2.15 2.15 0 002.143 30h17.143a2.15 2.15 0 002.143-2.143V8.571c0-.321-.108-.535-.322-.75zm-8.25-5.25l6 6h-6v-6zm6.429 25.286H2.143V2.143h8.571V8.57a2.15 2.15 0 002.143 2.143h6.429v17.143z"
        fill="#000"
      />
      <path
        className={className}
        d="M4.286 21.428h12.857v2.143H4.286v-2.143zM4.286 15h12.857v2.143H4.286V15z"
        fill="#000"
      />
    </svg>
  )
}

export default document
