import React, { useEffect, useState } from "react";

import ProductCard from "../../Component/Shared/ProductCard";
import { ProductsCardsArray } from "./ProductsArray";
import axios from "axios";
import CustomDetails from "./../Add Post/CustomDetails";
import { Link, useSearchParams } from "react-router-dom";

const ProductsSection = ({ products }) => {
  const [searchparams, setSearchParams] = useSearchParams();
  const search = searchparams.get("search");
  const category = searchparams.get('category')

   /*  const filteredProducts = products.filter((product) => {
      return (
        (!search ||  product.tittle.toLowerCase().includes(search.toLowerCase())) &&
        (!category || product.Category === category)
      );
    }); */
    const filteredProducts = products.filter((product) => {
      return (
        (!search || Object.values(product).some(value => 
          typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
        )) &&
        (!category || product.Category === category)
      );
    });
   
    
  //pagination Code ------------
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const TotalProducts = products.length;
  const TotalPages = Math.ceil(TotalProducts / itemsPerPage);
  const start_index = (currentPage - 1) * itemsPerPage;
  const end_Index = start_index + itemsPerPage;
  /* const Updated_Product = products.slice(start_index, end_Index); */
  const Updated_Product = filteredProducts.slice(start_index, end_Index);
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(3, TotalPages); i++) {
        pageNumbers.push(i);
      }
      if (TotalPages > 3) {
        pageNumbers.push("ellipsis");
        pageNumbers.push(TotalPages);
      }
    } else {
      pageNumbers.push(1, "ellipsis");
      for (
        let i = currentPage - 1;
        i <= currentPage + 1 && i <= TotalPages;
        i++
      ) {
        pageNumbers.push(i);
      }
      if (currentPage + 1 < TotalPages) {
        pageNumbers.push("ellipsis");
        pageNumbers.push(TotalPages);
      }
    }

    return pageNumbers;
  };
  return (
    <>
      <div>
       
        {Updated_Product.length > 0 ? (
          <>
            <div className="flex  gap-3 flex-wrap">
              {Updated_Product.map((item, index) => (
                <div className="xl:w-[32%] md:w-[32%] w-full  " key={index}>
                  <Link to={"/singleproduct/" + item._id}>
                    <ProductCard
                      Pname={item.tittle}
                      cat={item.Category}
                      image={item.Product_images[0]?.images}
                      location={item.Vendor_street}
                      price={item.Rented_Price}
                      duration={item.Rented_as}
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
          <div className="">
            <button
              className=" md:px-4 px-2 font-normal text-sm py-2 bg-gray-300 rounded-md"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {/* Pagination Numbers---------------------------- */}
            {getPageNumbers().map((number, index) => (
              <button
                key={index}
                className={`mx-1  py-2 rounded-md md:px-4 px-3 font-normal text-sm  ${
                  number === "ellipsis"
                    ? "bg-none text-gray-600 cursor-default"
                    : currentPage === number
                    ? "bg-color-primary-yel text-white font-semibold"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  number !== "ellipsis" ? setCurrentPage(number) : null
                }
              >
                {number === "ellipsis" ? "..." : number}
              </button>
            ))}
            <button
              className="ml-1 mt-2 md:mt-0   md:px-4 px-3 font-normal text-sm py-2 bg-gray-300 rounded-md"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, TotalPages))
              }
              disabled={currentPage === TotalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
