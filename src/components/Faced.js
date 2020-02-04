import React from "react";
import mainBc from "../img/mainBc.jpg";
export default function Faced({ children, imge }) {
  return (
    <header>
      <img src={mainBc} alt="" className="faced" />
      {children}
    </header>
  );
}
