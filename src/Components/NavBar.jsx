import React, { useEffect, useState } from "react";
import "../App.css";
import { VscThreeBars } from "react-icons/vsc";
import { useClick } from "../Store/useClick";
function NavBar() {
  const [resize, setResize] = useState(window.innerWidth);
  //   const [click, setClick] = useState(false);
  const click = useClick((state) => state.click);
  const setClick = useClick((state) => state.setClick);
  //   const handleClick = () => {
  //     setClick((prev) => !prev);
  //   };
  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth);
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="nav-section">
      {resize <= 360 ? (
        <div className="nav-section-A">
          <div className="logo-section-navbar">logo</div>
          <div className="icon-menu">
            <VscThreeBars
              className={click ? `white` : `black`}
              onClick={() => setClick((prev) => !prev)}
            />
            {click ? (
              <div className="menu">
                <ul className="link-list-A">
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">shop</a>
                  </li>
                  <li>
                    <a href="#">contact us</a>
                  </li>
                </ul>
                <div className="btn-cotainer-A">
                  <button>sign up </button>
                  <button>login</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : resize > 360 && resize <= 600 ? (
        <div>
          <div className="logo-section-navbar "></div>
          <div className="link-section"></div>
          <div className="btn-section-auth"></div>
        </div>
      ) : (
        <div>
          <div className="logo-section-navbar "></div>
          <div className="link-section"></div>
          <div className="btn-section-auth"></div>{" "}
        </div>
      )}
    </div>
  );
}

export default NavBar;
