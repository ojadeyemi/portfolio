import { ProjectCard } from "@/components/widgets/project-card";
import { DATA } from "@/data/resume";

const FullProjects: React.FC = () => {
  return (
    <>
      <ul className="flex flex-col divide-y border-y">
        {DATA.projects.map((project) => (
          <li key={project.slug}>
            <a
              href={`#${project.slug}`}
              className="grid gap-x-6 py-3 text-sm transition-colors hover:bg-muted/50 sm:grid-cols-[7rem_7rem_1fr]"
            >
              <span className="font-semibold">{project.title}</span>
              <span className="text-muted-foreground">{project.type}</span>
              <span className="text-muted-foreground">{project.headline}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-y-14 divide-y [&>*+*]:pt-14">
        {DATA.projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </>
  );
};

export default FullProjects;
