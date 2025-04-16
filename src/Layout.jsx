import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative">
        <button onClick={toggleDropdown} className="p-2 bg-blue-500 text-white rounded-md">
          <IoIosArrowDropdown size={20}/>
        </button>
        {isOpen && (
          <ul className="absolute top-10 left-0 bg-white shadow-md rounded-md w-40">
            <li className="p-2 hover:bg-gray-200">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to="/Login" onClick={() => setIsOpen(false)}>Login</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to= "/CreateReport" onClick={() => setIsOpen(false)}>Create Report</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to="/Urgent Alerts" onClick={() => setIsOpen(false)}>Urgent Alerts</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to="/Past Reports" onClick={() => setIsOpen(false)}>Past Reports</Link>
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;