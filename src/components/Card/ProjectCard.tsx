import { useTranslation } from "react-i18next";
import type { Project } from "../../types";
import "./ProjectCard.css";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "fr";

  return (
    <article className="project-card">
      <div
        className={!project.imgPath ? "card-thumb blank-bg" : "card-thumb"}
        aria-hidden="true"
      >
        {project.imgPath ? (
          <img
            src={`/projects/${project.imgPath}`}
            loading="lazy"
            draggable={false}
          />
        ) : null}
      </div>

      <div className="card-body">
        <div className="card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="card-title">{project.title[lang]}</h3>
        <p className="card-desc">{project.desc[lang]}</p>

        <div className="card-footer">
          <span className="card-year">{project.year}</span>
          {project.link ? (
            <a
              href={project.link}
              className="card-link"
              target={project.link}
              rel="noopener noreferrer"
            >
              {t("projects.view_project")} →
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
