import React from "react";
import RestartButton from "./components/RestartButton.js";
import Results from "./components/Results.js";
import UserTypings from "./components/UserTypings.js";

const words = "Mat22";

function App() {
  return (
    <>
    <CountdownTimer timeLeft={30} />
    <WordsContainer>
      <GeneratedWords words ={words} />
      <UserTypings className="absolute inset-0" userInput={words} />
    </WordsContainer>
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

const WordsContainer = ({ children }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const GeneratedWords = ({ words }) => {
  return <div className="text-slate-500">{words}</div>;
}

const CountdownTimer = ({ timeLeft }) => {
  return <h2 className="text-blue-400 font-medium">Time: {timeLeft}</h2>;
}

export default App;
