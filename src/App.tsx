import './App.css'
import { useState } from 'react'
import type { State } from './tyypit.ts'
import { LandingPage } from './pages/landingpage.tsx'

function App() {
  const [state, setState] = useState<State>("landingpage");

  if (state === "landingpage") {
    return (
      <LandingPage onStart={() => setState("intro")} />
    );
  } else if (state === "intro") {
    return (
      <div className="intro">
      </div>
    );
  }
}

export default App;