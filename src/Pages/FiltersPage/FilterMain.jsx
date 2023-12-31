import React, { useEffect, useState } from "react";

import BreadCrums from "../../Component/BreadCrums";
import { ProductsCardsArray } from "../MainDashboard/ProductsArray";
import ProductCard from "../../Component/Shared/ProductCard";
import DetailsSection from "../MainDashboard/DetailsSection";
import sorry from "../../assets/sorry.png";

import { Link, useSearchParams } from "react-router-dom";
const FilterMain = ({ product }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const brand = searchParams.get("brand");

  let start_price = searchParams.get("startPrice");

  let end_price = searchParams.get("endPrice");

  start_price = parseInt(start_price, 10);

  end_price = parseInt(end_price, 10);

  /* console.log("price from url", end_price); */

  const [filterProduct, setFilterProduct] = useState([]);
  const [pricefilter, setPricefilter] = useState([]);
  const [mergedFilter, setMergedFilter] = useState([]);

useEffect(() => {
  let filteredProduct = product;

  if (brand) {
    filteredProduct = filteredProduct.filter((item) => item.Brand === brand);
  }

  if (start_price || end_price) {
    filteredProduct = filteredProduct.filter((item) => {
      const Product_Price = parseInt(item.Rented_Price, 10);
      return (
        (!brand || (brand && item.Brand === brand)) &&
        Product_Price >= start_price &&
        Product_Price <= end_price
      );
    });
  }

  setFilterProduct(filteredProduct);
}, [product, brand, start_price, end_price, setFilterProduct]);


  return (
    <>
      <div>
        <div>
          <div className="md:mt-3 my-4">
            <h1 className="font-Robot font-normal text-2xl text-[#92929D]">
              Home / {product[0]?.Category}
            </h1>
          </div>

          {filterProduct.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-3 2xl:mt-[3.5%] xl:mt-[4%] lg:mt-[5%]">
                {filterProduct.map((item, index) => (
                  <div
                    className="xl:w-[32%] 2xl:w-[32%] lg:w-[48%] md:w-[48%] w-full   bg-white relative rounded-md pb-5 h-[350px]"
                    key={index}
                  >
                    <Link to={"/singleproduct/" + item._id}>
                      <ProductCard
                        Pname={item.tittle}
                        cat={item.Category}
                        image={item.Product_images[0]?.images}
                        price={item.Rented_Price}
                        duration={item.Rented_as}
                        location={item.Vendor_street}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col  items-center">
                <img src={sorry} className=" w-[50%]" />
                <h1 className="text-2xl font-Cairo font-semibold">
                  Sorry no Products to show
                </h1>
              </div>
            </>
          )}
          <div>
            <div className="text-center mt-8">
              <button className="border-[#000000] border py-2 px-7 rounded-lg font-Mont font-semibold text-sm text-center text-black">
                Load More
              </button>
            </div>
          </div>
          <div className="my-8">
            <DetailsSection textcolor={"text-white"} fill={"white"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMain;
