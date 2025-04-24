import confirmed from "/assets/images/icon-order-confirmed.svg";
import useCartStore from "../../context/CartContext";

const ConfirmCard = ({product, amount, handleOrder}) => {
  const {reset}= useCartStore();
  const handleReset=()=>{
    handleOrder();
    reset();
  }
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#0000007e]">
      <div className="w-full h-full flex justify-center sm:items-center items-baseline-last">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[60%] bg-white p-6 max-h-[90vh] overflow-y-auto sm:rounded-2xl rounded-t-2xl">
          <img src={confirmed} alt="" />
          <h1 className="font-rht-bold text-3xl pt-3 pb-1">Order Confirmed</h1>
          <p className="text-gray-600">We hope you enjoyed your food!</p>
          <div className="bg-[#fcf9f7] p-5">
            { 
              product.map((pro)=>(
                <div key={pro.name}>
                <div className="flex justify-between items-center my-7">
                  <div className="flex gap-3">
                    <div>
                      <img src={pro.productDetail.image.thumbnail} alt="thumbnail" className="h-14 rounded-lg"/>
                    </div>
                    <div className="">
                      <h1 className="mb-1.5 font-rht-semibold text-[#260f08]">{pro.name}</h1>
                      <div className="flex gap-4.5">
                        <p className="text-[#943c21] font-rht-semibold">{pro.quantity}x</p>
                        <p className="text-[#ad8985]">
                          @${pro.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="font-rht-semibold">
                    ${pro.quantity * pro.price}
                  </div>
                </div>
                <hr className="text-gray-200 my-5"/>
                </div>
              ))
            }
            <div className="flex justify-between mt-8">
              <p>Order Total</p>
              <h1 className="font-rht-bold text-xl">${amount}</h1>
            </div>
          </div>
          <div onClick={handleReset} className="bg-[#c73a0f] text-white p-2.5 rounded-3xl mt-7 flex items-center justify-center">
            <button>Start New Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCard;
