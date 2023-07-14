import React from "react";

type wrap = {
  children: any;
};
const Wrapper = (props: wrap) => {
  return (
    <div className="container bg-white min-vh-100 py-4 d-flex flex-column align-items-center justify-content-around">
      {props.children}
    </div>
  );
};

export default Wrapper;
