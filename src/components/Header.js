import React from "react";
import testLogo from "../images/testLogo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <img src={testLogo} alt="logo" className="logoTest" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/cars">our cars</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/">cart</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
