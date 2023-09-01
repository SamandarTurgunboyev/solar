import React from "react";

const ModalFather = ({ children }) => {
  return (
    <section className="w-full h-screen absolute top-0 left-0 z-[101]">
      {children}
    </section>
  );
};

export default ModalFather;
