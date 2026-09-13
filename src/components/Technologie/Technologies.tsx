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
        <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-20">

            <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#111827]">
                Explore the{" "}
                <span className="brand-gradient-text">
                Technologies
                </span>
            </h2>

            <p className="mt-1 text-sm text-[#94a3b8]">
                Pick technologies to build your ideal development stack.
            </p>
            </div>

            <div className="grid items-start gap-5 lg:grid-cols-[1fr_310px]">

            <AvailableTech
                technologies={technologies}
                selectedTechnologies={selectedTechnologies}
                setSelectedTechnologies={setSelectedTechnologies}
            />

            <MyStack
                selectedTechnologies={selectedTechnologies}
                setSelectedTechnologies={setSelectedTechnologies}
            />

            </div>
        </section>
    );
};

export default Technologies;