import React from "react";
import ListHeader from "../ListHeader";
import Shirt from "./Shirt";

const ResponsiveList = () => {
  return (
    <div className="responsive-list mx-auto h-full w-[100%] flex flex-col ml-auto rounded-2xl shadow-xl">
      <div className="header w-1/2 mx-auto">
        <ListHeader text="بازیکنان ذخیره" />
      </div>
      <div className="px-11 py-10 h-full ">
        <div
          className="flex flex-row justify-between
                w-full space-x-4"
        >
          {/* <Shirt name="player" pose={2} isInTheList={true} />
          <Shirt name="player" pose={3} isInTheList={true} />
          <Shirt name="player" pose={5} isInTheList={true} />
          <Shirt name="player" pose={7} isInTheList={true} /> */}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveList;
