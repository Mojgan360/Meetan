import React from "react";
import { useParams } from "react-router-dom";

export default function Car() {
  console.log(useParams());
  const { id } = useParams();

  return <div>Hello from Car...., id is: {id} </div>;
}
