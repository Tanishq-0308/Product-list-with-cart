import React, { useEffect, useState } from "react";
import emptyCartImmage from "../../../assets/images/illustration-empty-cart.svg";
import useCartStore from "../../context/CartContext";
import removeImg from "../../../assets/images/icon-remove-item.svg";
import carbonNeutral from "../../../assets/images/icon-carbon-neutral.svg";
import ConfirmCard from "../card/ConfirmCard";

const Cart = () => {
  const { addedProduct, remove } = useCartStore();
  const [empty, setEmpty] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    if (addedProduct.length == 0) {
      setEmpty(true);
      setTotalCount(0);
    } else {
      console.log(addedProduct);
      
      setEmpty(false);
      const value = addedProduct.map((pro) => pro.quantity);
      const total = value.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      setTotalCount(total);

      const amount = addedProduct.map((pro) => pro.quantity * pro.price);
      const amountTotal = amount.reduce((a, c) => {
        return a + c;
      }, 0);
      setTotalAmount(amountTotal);
    }

  }, [addedProduct]);


  return (
    <>
    <div className="bg-white p-5 rounded-xl">
      <h1 className="font-rht-bold text-[#bc4800] text-xl">Your Cart ({totalCount})</h1>
      {empty ? (
        <div className="flex items-center flex-col my-5">
          <img src={emptyCartImmage} alt="" />
          <p className="text-[#943c21] font-rht-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          {addedProduct.map((prod) => (
            <>
              <div className="flex justify-between items-center py-5">
                <div>
                  <h1 className="mb-1.5 font-rht-semibold text-[#260f08]">
                    {prod.name}
                  </h1>
                  <div className="flex gap-4.5">
                    <p className="text-[#943c21] font-rht-semibold">
                      {prod.quantity}x
                    </p>
                    <p className="text-[#ad8985]">@${prod.price}</p>
                    <p className="text-[#87635a]">
                      ${prod.quantity * prod.price}
                    </p>
                  </div>
                </div>
                <div>
                  <button onClick={() => remove(prod.name)}>
                    <img
                      src={removeImg}
                      alt="cross"
                      className="h-4 border rounded-4xl p-0.5"
                    />
                  </button>
                </div>
              </div>
              <hr className="text-[#6b595744]" />
            </>
          ))}
          <div className="flex justify-between mt-7">
            <p className="">Order Total</p>
            <h1 className="font-rht-bold text-xl">${totalAmount}</h1>
          </div>
          <div className="bg-[#fcf9f7] mt-6 flex p-4 ">
              <img src={carbonNeutral} alt="tree" />
              <p>This is a <span className="font-rht-semibold">carbon-neutral</span> delivery.
            </p>
          </div>
          <div className="bg-[#c73a0f] text-white p-3 rounded-3xl mt-7 flex items-center justify-center">
            <button>Confirm Order</button>
          </div>
        </>
      )}
    </div>
    <ConfirmCard product={addedProduct} amount={totalAmount}/>
      </>
  );
};

export default Cart;
