import React from "react";
interface ListHeaderText {
  text: string;
}

const ListHeader = (props: ListHeaderText) => {
  return (
    <div className="header-list bg-headerBackgroundColor h-50px flex justify-center items-center rounded-t-2xl text-white">
      <span className="">{props.text}</span>
    </div>
  );
};

export default ListHeader;
