import { BlurFade } from "@/components/ui/blur-fade";
import { ResumeCard } from "@/components/widgets/resume-card";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { DATA } from "@/data/resume";

const Certification = () => {
  return (
    <section id="certification">
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <h2 className="text-md font-bold">Certification</h2>
        </BlurFade>
        {DATA.certification.map((education, id) => (
          <BlurFade
            key={education.school + id}
            delay={BLUR_FADE_DELAY * 9 + id * 0.05}
          >
            <ResumeCard
              key={education.school}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`Valid until ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Certification;
