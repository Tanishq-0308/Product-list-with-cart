import confirmed from "../../../assets/images/icon-order-confirmed.svg";

const ConfirmCard = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#0000007e]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[30%] bg-white p-6 rounded-2xl">
          <img src={confirmed} alt="" />
          <h1 className="font-rht-bold text-3xl pt-3 pb-1">Order Confirmed</h1>
          <p className="text-gray-600">We hope you enjoyed your food!</p>
          <div></div>
          <div className="bg-[#c73a0f] text-white p-2.5 rounded-3xl mt-7 flex items-center justify-center">
            <button>Start New Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCard;
