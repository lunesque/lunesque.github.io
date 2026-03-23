import { NavLink, useLocation } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { to: "/about", label: t("nav.about") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/contact", label: t("nav.contact") },
  ];

  if (pathname === "/") return;

  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>Thuy Hang Nguyen</h3>
          <ul className="footer-links">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Portfolio {t("footer.copy")}</p>
        </div>
      </div>
    </footer>
  );
};
