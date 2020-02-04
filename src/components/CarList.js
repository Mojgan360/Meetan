import Car from "./Car";
import React from "react";

export default function CarList({ title, cars }) {
  return (
    <div>
      <h1>{title}</h1>
      {cars.map(item => {
        return <Car key={item.id} {...item} />;
      })}
    </div>
  );
}
