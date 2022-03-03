import { React, useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img
        className="navbar_logo"
        src="https://cdn.iphoneincanada.ca/wp-content/uploads/2021/11/Netflix.jpeg"
        alt="Netflix Logo"
      />
      <img
        className="navbar_user"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="User Id"
      />
    </div>
  );
}

export default Navbar;
