import './App.css'
import './assets/colors.css'
import { useState } from 'react'
import type { State } from './assets/tyypit.ts'
import { LandingPage } from './pages/landingpage.tsx'
import { Intro } from './pages/intro.tsx';
import { Grid } from './pages/grid.tsx';
import { End } from './pages/end.tsx';

function App() {
  const [state, setState] = useState<State>("landingpage");

  if (state === "landingpage") {
    return (
      <LandingPage onStart={() => setState("intro")} />
    );
  } else if (state === "intro") {
    return (
      <Intro onStart={() => setState("grid")} />
    );
  }
  else if (state === "grid") {
    return (
      <Grid onFinish={() => setState("end")} />
    );
  }
  else if (state === "end") {
    return (
      <End />
    );
  }
}

export default App;