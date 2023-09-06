import React from "react";
import TextArea from "../../Component/NavBar/TextArea";

const ProductDetails = ( {heading1,heading2}) => {
  return (
    <div>
      <div>
        <div className="md:grid grid-cols-2 gap-8 items-end">
          <div>
            <div className="pt-5 pb-4">
              <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
               {heading1}
              </h1>
            </div>
            <div className="bg-white p-4 rounded-lg">
                <TextArea />
            </div>
          </div>
          <div>
            <div className="pt-6 pb-4">
              <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
              {heading2}
              </h1>
            </div>
            <div  className="bg-white p-4 rounded-lg">
                <TextArea />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
