import React from "react";
import localCarUrl from "../url/localsCarUrl";
export default function CarList() {
  return <div>{
    localCarUrl.map(item=>
      return(
        <Car key={item.id} {...item}/>
      ))
    }</div>;
}
