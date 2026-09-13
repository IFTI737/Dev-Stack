import React from "react";
import type { ITechnology } from "../../types/Technologies";
import { FaTimes } from "react-icons/fa";

interface IStackCardProps {
  technology: ITechnology;
}

const StackCard = ({ technology }: IStackCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2">
      
      {/* Technology Info */}
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

      {/* Remove Button */}
      <button className="text-xl text-gray-400 transition hover:text-gray-600">
        <FaTimes />
      </button>
    </div>
  );
};

export default StackCard;