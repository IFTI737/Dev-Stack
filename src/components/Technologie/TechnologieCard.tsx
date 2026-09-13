import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { ITechnology } from "../../types/Technologies.ts";

import { FaStar } from "react-icons/fa";

interface ITechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<
    SetStateAction<ITechnology[]>
  >;
}

const TechnologieCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyCardProps) => {
  const isSelected = selectedTechnologies.some(
    (item) => item.id === technology.id,
  );

  return (
    <div
      className={`rounded-2xl border bg-white p-5 transition-all ${
        isSelected
          ? "border-pink-400 shadow-md"
          : "border-gray-200"
      }`}
    >
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 min-h-[48px] text-sm leading-5 text-[#475569]">
        {technology.description}
      </p>

      {/* Category / Difficulty / Rating */}
      <div className="mt-5 flex items-center justify-between text-xs">
        <span className="rounded-md bg-gray-100 px-3 py-1.5 text-gray-700">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 text-gray-600">
          <FaStar className="text-yellow-500" />
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white ${
          isSelected
            ? "bg-pink-200"
            : "brand-gradient"
        }`}
      >
        {isSelected
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologieCard;