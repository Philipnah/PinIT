import Chat from "./components/Chat";

import Silk from "./blocks/Backgrounds/Silk/Silk";

function App() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bold">Welcome to PinIT</h1>
        <h2 className="text-lg px-4 text-center">
          Pin any ITU related news to this page to share it among the wonderful
          students of ITU! 🥳
        </h2>
        <Chat />
      </div>
    </>
  );
}

export default App;
