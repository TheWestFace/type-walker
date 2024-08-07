import React from "react";
import RestartButton from "./components/RestartButton.js";
import Results from "./components/Results.js";
import UserTypings from "./components/UserTypings.js";

const words = "Mat22";

function App() {
  return (
    <>
    <CountdownTimer timeLeft={30} />
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      <GeneratedWords words ={words} />
      <UserTypings className="absolute inset-0" userInput={words} />
    </div>
    <RestartButton
      className="mx-auto mt-10 text-slate-500"
      onRestart={() => null}
    />
    <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />;
    </>
  )
}

const GeneratedWords = ({ words }) => {
  return <div className="text-slate-500">{words}</div>;
}

const CountdownTimer = ({ timeLeft }) => {
  return <h2 className="text-blue-400 font-medium">Time: {timeLeft}</h2>;
}

export default App;
