import { Bounce, toast } from "react-toastify";
import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { ITechnology } from "../../types/Technologies.ts";

import { FaTimes } from "react-icons/fa";

interface IStackCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<
    SetStateAction<ITechnology[]>
  >;
}

const StackCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: IStackCardProps) => {

  const handleRemoveTechnology = (technology: ITechnology) => {
    const restTechnologies = selectedTechnologies.filter(
      (selectedTechnology) =>
        selectedTechnology.id !== technology.id,
    );

    setSelectedTechnologies(restTechnologies);
    toast.info(
    `${technology.name} removed from your stack`,
        {
            position: "top-center",
            autoClose: 3000,
            theme: "light",
            transition: Bounce,
        },
    );
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2">
      
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {technology.name}
          </h3>

          <p className="text-xs text-gray-400">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveTechnology(technology)}
        className="text-xl text-gray-400 transition hover:text-red-500"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default StackCard;