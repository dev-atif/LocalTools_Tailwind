import React from "react";
const About_product = [
  { desc: "This product is 100% gate garden and which is made india." },
  {
    desc:
      "In this gardening tools set 1 pc each of garden small trowel, big trowel, cultivator, i weeder and fork with pruners scissor and hand gloves.",
  },
  {
    desc:
      "Gate garden 5 spectacular gardening tools set with heavy gardening cut tool and one pair hand gloves by gate garden",
  },
  {
    desc:
      "Gate garden we are committed to producing top quality products that we know you will love. Non slip plastic handle",
  },
  {
    desc:
      "If for any reason you aren’t completely satisfied with your purchase, please contact us so that we can be of assistance.",
  },
];
const CancellationPolicy = ({product}) => {
  return (
    <>
      <div className="border-b border-[#92929D] pb-4">
        <div>
          <h3 className="text-xl font-bold  mt-8 mb-6">Cancellation Policy</h3>
        </div>
        <div>
          <p>
            {product?.Cancel_Description || ''}
          </p>
        </div>
      </div>
    </>
  );
};

export default CancellationPolicy;
