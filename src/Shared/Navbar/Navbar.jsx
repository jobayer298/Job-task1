import React from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import './Navbav.css'
import logo from '../../assets/images/Logo/Vector.png'
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Navbar = () => {
    const menu = (
      <>
        <li tabIndex={0}>
          <details>
            <summary>Home</summary>
            <ul className="p-2">
              <li tabIndex={0}>
                <details>
                  <summary>menu 1</summary>
                  <ul className=" ml-7">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Menu 2</a>
              </li>
              <li>
                <a>Menu 3</a>
              </li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Feature</summary>
            <ul className="p-2">
              <li tabIndex={0}>
                <details>
                  <summary>menu 1</summary>
                  <ul className=" ml-7">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Menu 2</a>
              </li>
              <li>
                <a>Menu 3</a>
              </li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Department</summary>
            <ul className="p-2 text-black">
              <li tabIndex={0}>
                <details>
                  <summary>menu 1</summary>
                  <ul className=" ml-7 text-black">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Menu 2</a>
              </li>
              <li>
                <a>Menu 3</a>
              </li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Event</summary>
            <ul className="p-2">
              <li tabIndex={0}>
                <details>
                  <summary>menu 1</summary>
                  <ul className=" ml-7">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Menu 2</a>
              </li>
              <li>
                <a>Menu 3</a>
              </li>
            </ul>
          </details>
        </li>
        <li>Contact</li>
      </>
    );
  return (
    <div className="bg-[#273240] text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black justify-center mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to='/'>
            <div className="flex items-center gap-0">
              <img src={logo} alt="" />
              <h2 className="text-2xl text-[#FF8B42]">Doctor Guide</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center justify-center">
            {menu}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Button text={"Login"}></Button>
          <Button text={"Sing up"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//  <Dropdown title="GeeksforGeeks">
//    <Dropdown.Item>Item 1</Dropdown.Item>
//    <Dropdown.Menu title="Item 2">
//      <Dropdown.Item>Item 2A</Dropdown.Item>
//      <Dropdown.Item>Item 2B</Dropdown.Item>
//    </Dropdown.Menu>
//    <Dropdown.Item>Item 3</Dropdown.Item>
//    <Dropdown.Menu title="Item 4">
//      <Dropdown.Menu title="Item 4A">
//        <Dropdown.Item>Item 4A-A</Dropdown.Item>
//        <Dropdown.Item>Item 4A-B</Dropdown.Item>
//      </Dropdown.Menu>
//      <Dropdown.Item>Item 4B</Dropdown.Item>
//    </Dropdown.Menu>
//  </Dropdown>;