import React, { useEffect, useState } from "react";

import ProductCard from "../../Component/Shared/ProductCard";
import { ProductsCardsArray } from "./ProductsArray";
import axios from "axios";
import CustomDetails from "./../Add Post/CustomDetails";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://backend-two-blush-62.vercel.app/products")
      .then((responce) => {
        setProducts(responce.data);
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }, [products]);
  return (
    <>
      <div>
    
        {products.length > 0 ? (
          <>
            <div className="flex  gap-3 flex-wrap">
              {products.map((item, index) => (
                <div className="xl:w-[32%] md:w-[32%] w-full  " key={index}>
                 <Link to={'/singleproduct/'+item._id}>
                 <ProductCard
                    Pname={item.tittle}
                    cat={item.Category}
                    image={item.Product_images[0]?.images}
                    price={item.Payment_Amount}
                    location={item.Vendor_street}
                    /* Label={item.customDetails?.[0]?.label ?? ""}
                    LabelColor={"bg-[#EB2424]"} */
                  />
                 </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="bg-white p-10 rounded-lg text-center">
              <h1 className="text-lg font-Mont font-semibold">
                Sorry No products show
              </h1>
            </div>
          </>
        )}
        <div className="text-center mt-8">
          <button className="border-[#000000] border py-2 px-7 rounded-lg font-Mont font-semibold text-sm text-center text-black">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
