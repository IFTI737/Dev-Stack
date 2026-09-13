import type { ITechnology } from "../../types/Technologies";
import { FaStar } from "react-icons/fa";

interface ITechnologyCardProps {
  technology: ITechnology;
}

const TechnologieCard = ({
  technology,
}: ITechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Image + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-xl font-semibold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Meta Information */}
      <div className="mt-6 flex items-center justify-between text-xs">
        <span className="rounded-md bg-gray-100 px-3 py-1 text-gray-700">
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
      <button className="brand-gradient mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologieCard;