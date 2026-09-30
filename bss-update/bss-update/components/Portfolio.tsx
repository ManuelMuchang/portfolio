import {
  education,
  otherProjects,
  profile,
  projects,
  skills,
  type Project,
} from "@/data/portfolio";

function ProjectPanel({ project }: { project: Project }) {
  const { panel } = project;
  return (
    <div
      className={`panel panel--${panel.imageKind ?? "type"}`}
      style={{ background: panel.background, color: panel.ink }}
    >
      {panel.image && panel.imageKind === "screenshot" ? (
        <img className="panel__shot" src={panel.image} alt={panel.imageAlt ?? ""} />
      ) : (
        <>
          <div className="panel__top">
            {panel.image && (
              <img className="panel__logo" src={panel.image} alt={panel.imageAlt ?? ""} />
            )}
            <p className="panel__kind">{project.kind}</p>
          </div>
          <p className="panel__name" aria-hidden="true">
            {panel.title ?? project.name}
          </p>
        </>
      )}
    </div>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const hasLinks = Boolean(project.code || project.site);
  return (
    <article className={`project ${index % 2 === 1 ? "project--flip" : ""}`} id={project.slug}>
      <ProjectPanel project={project} />
      <div className="project__body">
        <h3 className="project__title">{project.name}</h3>
        <p className="project__role">{project.role}</p>
        <p className="project__summary">{project.summary}</p>
        <ul className="project__work">
          {project.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="tags" aria-label="Tecnologias">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project__links">
          {project.site && (
            <a className="link-strong" href={project.site} target="_blank" rel="noreferrer">
              Abrir o site
            </a>
          )}
          {project.code && (
            <a className="link-strong" href={project.code} target="_blank" rel="noreferrer">
              Ver o código no GitHub
            </a>
          )}
          {!hasLinks && project.note && <span className="project__note">{project.note}</span>}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const year = new Date().getFullYear();
  return (
    <>
      <a className="skip" href="#conteudo">
        Saltar para o conteúdo
      </a>

      <header className="topbar">
        <div className="wrap topbar__inner">
          <a className="topbar__name" href="#inicio">
            {profile.name}
          </a>
          <nav aria-label="Secções">
            <ul className="topbar__nav">
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#tecnologias">Tecnologias</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
          <p className="hero__role">{profile.title}</p>
          <h1 className="hero__title" id="hero-title">
            {profile.name}
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="button button--solid" href="#projetos">
              Ver projetos
            </a>
            <a className="button" href={profile.cv} download>
              Descarregar CV
            </a>
          </div>
          <ul className="hero__facts">
            {profile.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>{profile.location}</li>
          </ul>
        </section>

        <section className="section wrap" id="projetos" aria-labelledby="projetos-title">
          <h2 className="section__title" id="projetos-title">
            Projetos
          </h2>
          <p className="section__lead">
            Aplicações e sites em que trabalhei, para empresas e em projetos próprios.
          </p>
          <div className="projects">
            {projects.map((project, i) => (
              <ProjectEntry key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="others">
            <h3 className="others__title">Projetos académicos</h3>
            <ul className="others__list">
              {otherProjects.map((p) => (
                <li key={p.name}>
                  <span className="others__name">{p.name}</span>
                  <span className="others__detail">{p.detail}</span>
                  <span className="others__stack">{p.stack}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section wrap" id="tecnologias" aria-labelledby="tec-title">
          <h2 className="section__title" id="tec-title">
            Tecnologias
          </h2>
          <div className="skills">
            {skills.map((group) => (
              <div className="skills__group" key={group.area}>
                <h3>{group.area}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="education">
            <h3>Formação</h3>
            <p className="education__degree">{education.degree}</p>
            <p>{education.school}</p>
            <p className="education__status">{education.status}</p>
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contacto-title">
          <div className="wrap">
            <h2 className="contact__title" id="contacto-title">
              Contacto
            </h2>
            <p className="contact__lead">
              Tem um projeto web ou mobile, ou quer falar sobre uma oportunidade? Envie um email ou
              uma mensagem no WhatsApp.
            </p>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <ul className="contact__links">
              <li>
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                  WhatsApp {profile.phone}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.cv} download>
                  CV em PDF
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <p>
          © {year} {profile.fullName}. Feito com Next.js e TypeScript.
        </p>
      </footer>
    </>
  );
}
