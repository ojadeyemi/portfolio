import Image from "next/image";

import { AutoplayVideo } from "@/components/widgets/autoplay-video";
import { DATA } from "@/data/resume";
import { withBase } from "@/lib/utils";

type Project = (typeof DATA.projects)[number];

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="grid gap-x-6 gap-y-1 sm:grid-cols-[7rem_1fr]">
    <dt className="text-sm text-muted-foreground">{label}</dt>
    <dd className="text-sm leading-relaxed">{children}</dd>
  </div>
);

const Lines: React.FC<{ items: readonly string[] }> = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="flex scroll-mt-20 flex-col gap-y-6"
    >
      <header className="flex flex-col gap-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h2
            id={`${project.slug}-title`}
            className="text-3xl font-semibold tracking-tight"
          >
            {project.title}
          </h2>
          <span className="text-sm text-muted-foreground">{project.dates}</span>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </header>

      {project.video && (
        <AutoplayVideo
          src={withBase(project.video)}
          label={`${project.title} demo video`}
        />
      )}

      {project.code && (
        <pre className="m-0 whitespace-pre-wrap rounded-lg bg-muted p-5 sm:whitespace-pre">
          <code>{project.code}</code>
        </pre>
      )}

      <dl className="flex flex-col gap-y-5">
        <Row label="My role">{project.role}</Row>
        <Row label="What I did">
          <Lines items={project.contributions} />
        </Row>
        <Row label="Outcomes">
          <Lines items={project.outcomes} />
        </Row>
        {project.image && (
          <Row label="How it works">
            <figure className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src={withBase(project.image.src)}
                alt={`${project.title} agent flow diagram`}
                width={project.image.width}
                height={project.image.height}
                className="w-56 flex-none rounded-lg bg-white p-2 no-drag"
              />
              <figcaption className="text-muted-foreground">
                {project.image.caption}
              </figcaption>
            </figure>
          </Row>
        )}
        <Row label="Methods">
          <Lines items={project.methods} />
        </Row>
        <Row label="Tools">{project.tools.join(", ")}</Row>
        <Row label="Skills">{project.skills.join(", ")}</Row>
        {project.links.length > 0 && (
          <Row label="Links">
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {project.links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${link.type} link for ${project.title}`}
                  className="inline-flex items-center gap-x-1.5 underline underline-offset-4 hover:text-muted-foreground"
                >
                  {link.icon}
                  {link.type}
                </a>
              ))}
            </div>
          </Row>
        )}
      </dl>
    </article>
  );
};
