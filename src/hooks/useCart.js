import React from "react";
import { useSelector } from "react-redux";

const useCart = () => {
  const Product = useSelector((state) => state.cart);
  //find Products length how many products in cart
  const ItemsINCart = Product.length;

  //calculate All product price
  const totalRentedPrice = (Product || []).reduce(
    (total, { Quantity, product }) => {
      const quantity = Quantity || 1; // Default to 1 if Quantity is undefined
      return total + (Number(product?.Rented_Price) || 0) * quantity;
    },
    0
  );
  //Taxes-----------------------------------------------
  const totaltax = (Product || []).reduce((total, { Quantity, product }) => {
    const quantity = Quantity || 1; // Default to 1 if Quantity is undefined
    return total + (Number(product?.Taxes) || 0) * quantity;
  }, 0);

  //Service Fees ------------------------------------------
  const totalServiceFee = (Product || []).reduce(
    (total, { Quantity, product }) => {
      const quantity = Quantity || 1; // Default to 1 if Quantity is undefined
      return total + (Number(product?.Service_fee) || 0) * quantity;
    },
    0
  );
  //Tax Percentage -------------------------------------
  const taxPercentage = Math.round((totaltax / totalRentedPrice) * 100);
  //Service Fee Percentage -----------------------
  const ServiceFeeePercentage = Math.round(
    (totalServiceFee / totalRentedPrice) * 100
  );
  //Mani Total Amount
  const TotalAmmount = totalRentedPrice + totalServiceFee + totaltax;

  return {
    ItemsINCart,
    totalRentedPrice,
    totaltax,
    totalServiceFee,
    taxPercentage,
    ServiceFeeePercentage,
    TotalAmmount,
  };
};

export default useCart;
