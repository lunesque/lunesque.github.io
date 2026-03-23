import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ProjectCategory } from "../../types";
import { projects } from "../../components/Card/projects";
import ProjectCard from "../../components/Card/ProjectCard";
import "./Projects.css";

interface Tab {
  id: ProjectCategory;
  key: string;
}

const TABS: Tab[] = [
  { id: "webdev", key: "projects.tab_webdev" },
  { id: "graphic", key: "projects.tab_graphic" },
  { id: "uxui", key: "projects.tab_uxui" },
];

export default function Projects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ProjectCategory>("webdev");

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <main className="page-enter projects">
      <h1 className="sideways">Projets</h1>
      <div>
        <div className="section">
          {/* Tabs */}
          <div className="projects-tabs" role="tablist">
            {TABS.map(({ id, key }) => (
              <>
                <button
                  key={id}
                  role="tab"
                  aria-selected={activeTab === id}
                  className={`tab-btn ${activeTab === id ? "active" : ""}`}
                  onClick={() => setActiveTab(id)}
                >
                  <img
                    className={`stars ${activeTab === id ? "active" : ""}`}
                    src="/star.svg"
                    alt=""
                  />
                  {t(key)}
                </button>
              </>
            ))}
          </div>

          {/* Cards grid */}
          <div key={activeTab} className="projects-grid" role="tabpanel">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
