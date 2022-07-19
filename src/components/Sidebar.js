import React, { useState } from "react";

const Sidebar = () => {
  const [tab, setTab] = useState(0);

  return (
    <nav class="sidebar">
      <ul className="side-nav">
        <li
          onClick={() => setTab(0)}
          className={` side-nav__item ${
            tab === 0 && "side-nav__item--active"
          }  `}
        >
          <li href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="assets/img/sprite.svg#icon-home"></use>
            </svg>
            <span>Hotel</span>
          </li>
        </li>
        <li
          onClick={() => setTab(1)}
          className={` side-nav__item ${
            tab === 1 && "side-nav__item--active"
          }  `}
        >
          <li href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="assets/img/sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span>Flight</span>
          </li>
        </li>
        <li
          onClick={() => setTab(2)}
          className={` side-nav__item ${
            tab === 2 && "side-nav__item--active"
          }  `}
        >
          <li href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="assets/img/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </li>
        </li>
        <li
          onClick={() => setTab(3)}
          className={` side-nav__item ${
            tab === 3 && "side-nav__item--active"
          }  `}
        >
          <li href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="assets/img/sprite.svg#icon-map"></use>
            </svg>
            <span>Tours</span>
          </li>
        </li>
      </ul>

      <div className="legal">&copy; 2017 by trillo. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
