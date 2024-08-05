import RestartButton from "./components/RestartButton.tsx";

const words = "Mat22";

function App() {
  return (
    <>
    <CountdownTimer timeLeft={30} />
    <GeneratedWords words={words} />
    <RestartButton
      className="mx-auto mt-10 text-slate-500"
      onRestart={() => null}
    />;
    </>
  )
}

const GeneratedWords = ({ words }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
}

const CountdownTimer = ({ timeLeft }) => {
  return <h2 className="text-blue-400 font-medium">Time: {timeLeft}</h2>;
}

export default App;
