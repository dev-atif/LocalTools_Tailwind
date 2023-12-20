import React from 'react'

const Inventory_Tab_SVG = ({props,fill}) => {
    return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M27 0H3C1.5 0 0 1.35 0 3v4.515c0 1.08.645 2.01 1.5 2.535V27c0 1.65 1.65 3 3 3h21c1.35 0 3-1.35 3-3V10.05c.855-.525 1.5-1.455 1.5-2.535V3c0-1.65-1.5-3-3-3zm-1.5 27h-21V10.5h21V27zM27 7.5H3V3h24v4.5z"
            fill={fill}
          />
          <path d="M10.5 15h9v3h-9v-3z"   fill={fill} />
        </svg>
      )
}

export default Inventory_Tab_SVG