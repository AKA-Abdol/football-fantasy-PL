import React from "react";
import Shirt from "./Shirt";

const ResponsiveList = () => {
  return (
    <div className="list mt-auto w-full flex">
      <Shirt name="no sara" pose={2} isInTheList={true} />
      <Shirt name="no sara" pose={3} isInTheList={true} />
      <Shirt name="no sara" pose={5} isInTheList={true} />
      <Shirt name="no sara" pose={7} isInTheList={true} />
    </div>
  );
};

export default ResponsiveList;
