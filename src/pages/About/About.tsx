import { useTranslation } from "react-i18next";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  return (
    <main className="about">
      <h1 className="sideways">{t("about.title")}</h1>

      <section>
        <section className="about-parts">
          <img className="stars" src="/star.svg" alt="" />
          <h2>{t("about.job-title")}</h2>
          <p>{t("about.desc")}</p>
        </section>

        <section className="about-parts">
          <img className="stars" src="/star.svg" alt="" />
          <h2>{t("about.t1")}</h2>
          <p>{t("about.p1")}</p>
          {/* <br />
          <h3>Certifications</h3>
          <ul>
            <li>Certification OpQuast 950/1000 (avril 2025)</li>
            <p>
              La certification OpQuast est une validation des connaissances sur
              les standards de qualité web, dans le but de normaliser les
              meilleures pratiques tout en utilisant un vocabulaire commun.
            </p>
          </ul> */}
        </section>

        <section className="about-parts">
          <img className="stars" src="/star.svg" alt="" />
          <h2>{t("about.t2")}</h2>
          <p>{t("about.p2")}</p>
        </section>

        <section className="about-parts">
          <img className="stars" src="/star.svg" alt="" />
          <h2>{t("about.t3")}</h2>
          <p>{t("about.p3")}</p>
        </section>
      </section>
    </main>
  );
}
