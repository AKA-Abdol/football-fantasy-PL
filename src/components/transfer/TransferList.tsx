import React from "react";
import ListHeader from "../ListHeader";
import Shirt from "./Shirt";

const TransferList = () => {
  return (
    <div className="list mx-auto w-max h-full flex flex-col ml-auto rounded-2xl shadow-xl">
      <ListHeader text="بازیکنان ذخیره" />
      <div className="w-full px-11 py-10 h-full">
        <div
          className="flex flex-col justify-between
                text-right text-fontGrey text-xs h-full"
        >
          <Shirt name="no sara" pose={2} isInTheList={true} />
          <Shirt name="no sara" pose={3} isInTheList={true} />
          <Shirt name="no sara" pose={5} isInTheList={true} />
          <Shirt name="no sara" pose={7} isInTheList={true} />
        </div>
      </div>
    </div>
  );
};

export default TransferList;
