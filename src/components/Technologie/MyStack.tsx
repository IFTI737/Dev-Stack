import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { ITechnology } from "../../types/Technologies.ts";

import StackCard from "./StackCard.tsx";

interface IMyStackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<
    SetStateAction<ITechnology[]>
  >;
}

const MyStack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: IMyStackProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">

      <h2 className="text-lg font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="mt-1 text-xs text-gray-400">
        {selectedTechnologies.length} Technologies Selected
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-7 flex h-[120px] items-center justify-center rounded-xl border border-dashed border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Your stack is empty.
            </p>

            <p className="mt-1 text-xs text-gray-300">
              Add technologies to build your stack.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {selectedTechnologies.map(
            (technology: ITechnology, ind: number) => {
              return (
                <StackCard
                  key={ind}
                  technology={technology}
                />
              );
            },
          )}
        </div>
      )}

      <button className="mt-5 w-full rounded-lg border border-red-300 py-2.5 text-sm font-medium text-red-500">
        Remove All
      </button>

    </div>
  );
};

export default MyStack;