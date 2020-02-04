import React from "react";
import Faced from "../components/Faced";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Faced>
        <Link to="/">
          <h1>our products</h1>
        </Link>
      </Faced>
    </div>
  );
}
