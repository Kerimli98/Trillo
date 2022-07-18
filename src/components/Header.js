import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img src="assets/img/logo.png" alt="varila logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          placeholder="Searhc hotels"
          className="search__input"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref="assets/img/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="assets/img/sprite.svg#icon-bookmark"></use>
          </svg>
          <span className="user-nav__notification">5</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="assets/img/sprite.svg#icon-chat"></use>
          </svg>
          <span className="user-nav__notification">12</span>
        </div>
        <div className="user-nav__user">
          <img
            src="assets/img/1.jpg"
            alt="User"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Fatima</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
