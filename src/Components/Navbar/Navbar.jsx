import React, { useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const listRefs = useRef([]);

  useEffect(() => {
    listRefs.current.forEach((item) => {
      item.addEventListener("click", activeLink);
    });

    return () => {
      listRefs.current.forEach((item) => {
        item.removeEventListener("click", activeLink);
      });
    };
  }, []);

  function activeLink(event) {
    event.preventDefault();
    listRefs.current.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  }

  return (
    <div>
      <div className="navigation">
        <ul>
          <li className="list active" ref={(el) => (listRefs.current[0] = el)}>
            <a href=".">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Accueil</span>
            </a>
          </li>
          <li className="list" ref={(el) => (listRefs.current[1] = el)}>
            <a href=".">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Projets</span>
            </a>
          </li>
          <li className="list" ref={(el) => (listRefs.current[2] = el)}>
            <a href=".">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list" ref={(el) => (listRefs.current[3] = el)}>
            <a href=".">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list" ref={(el) => (listRefs.current[4] = el)}>
            <a href="/">
              <span className="icon">
                <ion-icon name="git-merge-outline"></ion-icon>
              </span>
              <span className="text">Github</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
