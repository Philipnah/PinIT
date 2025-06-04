import Chat from "./components/Chat";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome to PinIT</h1>
      <h2 className="text-lg px-4 text-center">
        Pin any ITU related news to this page to share it among the wonderful
        students of ITU! 🥳
      </h2>
      <Chat />
    </div>
  );
}

export default App;
