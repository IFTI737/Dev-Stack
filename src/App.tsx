import { Suspense, useState } from "react";

import Hero from "./components/Hero.tsx";
import Nav from "./components/Nav.tsx";
import Technologies from "./components/Technologie/Technologies.tsx";

import type { ITechnology } from "./types/Technologies.ts";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Nav />
      <Hero />

      <Suspense fallback={<h2>Loading.......</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;