import { use, useState } from "react";

import type { ITechnology } from "../../types/Technologies.ts";

import AvailableTech from "./AvailableTech.tsx";
import MyStack from "./MyStack.tsx";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [
    selectedTechnologies,
    setSelectedTechnologies,
  ] = useState<ITechnology[]>([]);

  return (
    <section className="mx-auto max-w-[1560px] px-5 py-10">

      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-[32px] font-bold leading-tight text-[#111827]">
          Explore the{" "}
          <span className="brand-gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-1 text-sm text-[#94a3b8]">
          Pick technologies to build your ideal development stack.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid items-start gap-5 lg:grid-cols-[1fr_310px]">

        {/* Available Technologies */}
        <AvailableTech
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />

        {/* Your Stack */}
        <MyStack
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />

      </div>
    </section>
  );
};

export default Technologies;