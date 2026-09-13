import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { ITechnology } from "../../types/Technologies.ts";

import TechnologieCard from "./TechnologieCard.tsx";

interface IAvailableTechProps {
  technologies: ITechnology[];
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<
    SetStateAction<ITechnology[]>
  >;
}

const AvailableTech = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: IAvailableTechProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map(
        (technology: ITechnology, ind: number) => {
          return (
            <TechnologieCard
              key={ind}
              technology={technology}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={
                setSelectedTechnologies
              }
            />
          );
        },
      )}
    </div>
  );
};

export default AvailableTech;