import "./Contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "fr";

  return (
    <main className="contact">
      <h1 className="sideways">Contact</h1>
      <section className="content">
        <div className="contacts">
          <h2>{t("contact.info_title")}</h2>
          <p>{t("contact.info_body_p1")}</p>
          <br />
          <p>
            {t("contact.info_body_p2")}
            <a href="mailto:thuyhanggg.nguyen@gmail.com">email</a>,
            {t("contact.info_body_p3")}
            <a href="https://www.linkedin.com/in/thuy-hang-nguyenn/">
              LinkedIn
            </a>{" "}
            {t("contact.info_body_p4")}
            <a href="https://github.com/lunesque">GitHub</a>!
          </p>
          <br />
        </div>

        <div className="cv">
          <h2>{t("contact.cv_title")}</h2>
          <embed
            title="Mon CV"
            type="application/pdf"
            src={
              lang === "fr"
                ? "cv/Thuy-Hang_NGUYEN_CV_FR.pdf"
                : "cv/Thuy-Hang_NGUYEN_CV_EN.pdf"
            }
            width="420px"
            height="600px"
          />
        </div>
      </section>
    </main>
  );
}
