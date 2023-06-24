import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
    listRefs.current.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  }

function OpenSite(){
  let containerBtn = document.querySelector('.container-btn-start')
  containerBtn.classList.add('open-site')
}

  return (
    <div>
      <div className="navigation">
        <ul>
          <li className="list active" ref={(el) => (listRefs.current[0] = el)}>
            <Link to="/">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Accueil</span>
            </Link>
          </li>
          <li className="list" ref={(el) => (listRefs.current[1] = el)}>
            <Link to="/projets">
              <span className="icon">
                <ion-icon name="code-working-outline"></ion-icon>
              </span>
              <span className="text">Projets</span>
            </Link>
          </li>
          <li className="list" ref={(el) => (listRefs.current[2] = el)}>
            <Link to="/contact">
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <span className="text">Contact</span>
            </Link>
          </li>
          <li className="list" ref={(el) => (listRefs.current[3] = el)}>
            <Link to="/competences">
              <span className="icon">
                <ion-icon name="star-outline"></ion-icon>
              </span>
              <span className="text">Compétences</span>
            </Link>
          </li>
          <li className="list" ref={(el) => (listRefs.current[4] = el)}>
            <Link to="/github">
              <span className="icon">
                <ion-icon name="git-merge-outline"></ion-icon>
              </span>
              <span className="text">Github</span>
            </Link>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>

      <div className="container-btn-start">
        <button onClick={OpenSite} className="btn">
          Visite site
        </button>
      </div>

    </div>
  );
}

export default Navbar
