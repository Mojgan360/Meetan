import React from "react";
import CarList from "../components/CarList";
import { CarContext } from "../context/context_car";
export default function CarPsage() {
  const { data } = React.useContext(CarContext);
  return (
    <div>
      Hello from CarsPage
      <CarList title="XXXXX" cars={data} />
    </div>
  );
}
