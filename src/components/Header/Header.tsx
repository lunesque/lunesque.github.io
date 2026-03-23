import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export const Header = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const toggleMenuRef = useRef(null);
  const menuIconRef = useRef(null);

  const setLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { to: "/about", label: t("nav.about") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const toggleBurgerMenu = () => {
    toggleMenuRef.current.classList.toggle("hidden");
    menuIconRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className={pathname === "/" ? "absolute" : ""}>
        <div className="lang-btn">
          <div
            className={`${i18n.language === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </div>
          <div
            className={`${i18n.language === "fr" ? "active" : ""}`}
            onClick={() => setLang("fr")}
          >
            FR
          </div>
        </div>
        {pathname !== "/" ? (
          <>
            <div className="logo">
              <img
                id="heart-outline"
                src="/heart-outline.svg"
                height="52px"
                alt="Page d'accueil"
              />
              <NavLink to="/">thuy hang nguyen</NavLink>
            </div>
            <nav>
              <ul className="plain-menu">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === "/"}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="hidden-menu">
                <div
                  id="menu-icon"
                  ref={menuIconRef}
                  onClick={toggleBurgerMenu}
                >
                  <svg
                    tabIndex={0}
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </div>
                <ul className="toggle-menu hidden" ref={toggleMenuRef}>
                  {navItems.map(({ to, label }) => (
                    <li key={to} onClick={toggleBurgerMenu}>
                      <NavLink
                        to={to}
                        end={to === "/"}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                  {/* <li><a href="about.html" className="active">a propos</a></li>
                      <li><a href="projects.html">projets</a></li>
                      <li><a href="contact.html">contact</a></li> */}
                </ul>
              </div>
            </nav>
          </>
        ) : null}
      </header>
    </>
  );
};
