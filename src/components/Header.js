import React from "react";
import testLogo from "../images/testLogo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <img src={testLogo} alt="logo" className="logoTest" />

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">cars</Link>
            <ul>
              <li>
                <Link to="/">luxury car</Link>
              </li>
              <li>
                <Link to="/">classic car</Link>
              </li>
              <li>
                <Link to="/">tesla</Link>
                <ul>
                  <li>
                    <Link to="/">tesla A</Link>
                  </li>
                  <li>
                    <Link to="/">tesla B</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">Motorcycle</Link>
            <ul>
              <li>
                <Link to="/">BMV</Link>
              </li>
              <li>
                <Link to="/">holly</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
