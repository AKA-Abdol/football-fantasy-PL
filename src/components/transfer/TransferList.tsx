import React from "react";
import ListHeader from "../ListHeader";
import Shirt from "./Shirt";

const TransferList = () => {
  return (
    <div className="list mx-auto max-w-max flex flex-col  ml-auto rounded-2xl shadow-md pb-1 mb-2 max-h-max">
      <ListHeader text="بازیکنان ذخیره" />
      <div className="w-full px-11 py-10">
        <div
          className="flex flex-col justify-between
                text-right text-fontGrey text-xs mb-2 space-y-5"
        >
          <Shirt name="sara" pose={2} isInTheList={false} />
          <Shirt name="sara" pose={3} isInTheList={false} />
          <Shirt name="sara" pose={5} isInTheList={false} />
          <Shirt name="sara" pose={7} isInTheList={false} />
        </div>
      </div>
    </div>
  );
};

export default TransferList;
