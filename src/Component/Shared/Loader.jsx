import React from 'react';
import { PacmanLoader } from 'react-spinners';



const Loader = () => {
  return (
    <div className="loader-container flex justify-center py-10">
          <PacmanLoader color={'#FFFF00'}   size={40} />
        </div>
  )
};

export default Loader;
