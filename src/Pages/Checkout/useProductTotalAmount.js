import React, { useEffect, useState } from 'react'

const useProductTotalAmount = (totalRentedPrice, totalServiceFee, totalTax) => {
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        const calculatedTotal = totalRentedPrice + totalServiceFee + totalTax;
        setTotalAmount(calculatedTotal);
      }, [totalRentedPrice, totalServiceFee, totalTax]);
    
      return totalAmount;
};

export default useProductTotalAmount