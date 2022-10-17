import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header(params) {
  return (
    <nav
      className=" bg-secondary
    "
    >
      <div className="header container d-flex justify-content-between text-white align-items-center fw-bold fs-4 p-1 ">
        <Link to="/" className=" text-decoration-none">
          <p>Market</p>
        </Link>
        <link rel="stylesheet" href="" />
        <ul className="d-flex gap-4">
          <li>
            <Link to="/about-us" className=" text-decoration-none">
              <p>about us</p>
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className=" text-decoration-none">
              <p>contact us</p>
            </Link>
          </li>
          <li className="d-flex gap-2">
            <a className="text-decoration-none" href="#">
              cart
            </a>
            <p className="text-white">{params.count}</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
