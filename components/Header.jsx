import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo-text">
        #vanlife
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link>Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
