import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsOpen(false);
    navigate("/Login");
  }

  //if (location.pathname === "/" || location.pathname === "/Login"){
    //return <Outlet />;
  //}
  const showNav = !["/", "/Login"].includes(location.pathname);

  return (
    <>
      <nav className="relative">
        <button 
          onClick={toggleDropdown} 
          className="p-2 bg-blue-500 text-white rounded-md"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="dropdown-menu"
          >
          <IoIosArrowDropdown size={20}/>
        </button>
        {isOpen && (
          <ul 
            id="dropdown-menu"
            className="absolute top-10 left-0 bg-white shadow-md rounded-md w-40"
          >
            <li className="p-2 hover:bg-gray-200">
              <Link to="/Home" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to= "/CreateReport" onClick={() => setIsOpen(false)}>Create Report</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to="/Urgent Alerts" onClick={() => setIsOpen(false)}>Urgent Alerts</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to="/Past-Reports" onClick={() => setIsOpen(false)}>Past Reports</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to="/Login" onClick={() => setIsOpen(false)}>Logout</Link>
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;