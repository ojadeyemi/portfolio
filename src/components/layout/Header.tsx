import Image from "next/image";

import { DATA } from "@/data/resume";
import { withBase } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <section id="header">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Image
          src={withBase("/img/profile.jpg")}
          alt="Portrait of OJ Adeyemi"
          width={160}
          height={160}
          priority
          className="size-40 flex-none rounded-3xl object-cover object-[50%_35%] no-drag"
        />
        <div className="flex flex-col gap-y-2">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {DATA.name}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {DATA.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
