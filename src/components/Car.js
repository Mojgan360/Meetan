import React from "react";

export default function Car({ id, manufacturer, klass }) {
  return (
    <div>
      <h3>{manufacturer}</h3>
      <h3>{klass}</h3>
    </div>
  );
}
