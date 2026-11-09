import { BlurFade } from "@/components/ui/blur-fade";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { DATA } from "@/data/resume";
import { withBase } from "@/lib/utils";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="grid gap-6 sm:grid-cols-2">
          {DATA.introduction.map((item, id) => (
            <BlurFade
              key={item.heading}
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            >
              <h2 className="text-md font-bold">{item.heading}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="video">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <h2 className="text-md font-bold">About Me video</h2>
          <div className="mt-3">
            <HeroVideoDialog
              videoSrc={withBase(DATA.aboutVideo.src)}
              thumbnailSrc={withBase(DATA.aboutVideo.thumbnail)}
              thumbnailAlt="Title slide of the video, with OJ's name and photo"
              title="About Me video"
              duration={DATA.aboutVideo.duration}
            />
          </div>
        </BlurFade>
      </section>
    </>
  );
};

export default About;
