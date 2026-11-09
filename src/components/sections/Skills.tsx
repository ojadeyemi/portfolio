import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { DATA } from "@/data/resume";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h2 className="text-md font-bold">Skills</h2>
        </BlurFade>
        {DATA.skills.map((group, id) => (
          <BlurFade
            key={group.category}
            delay={BLUR_FADE_DELAY * 11 + id * 0.05}
          >
            <h3 className="text-xs font-semibold text-muted-foreground">
              {group.category}
            </h3>
            <div className="mt-1 flex flex-wrap gap-1">
              {group.items.map((skill) => (
                <Badge className="text-xs" key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Skills;
