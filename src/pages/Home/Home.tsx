import "./Home.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/about", label: t("nav.about") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <main>
      <div className="home">
        <div className="logo">
          <img id="heart-outline" src="/heart-outline.svg" />
          <h1>thuy hang nguyen</h1>
        </div>
        <p id="description">{t("home.desc")}</p>
        <ul className="nav">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
