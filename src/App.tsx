import Chat from "./components/Chat";
import Title from "./components/Title";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Analytics />
      <Title text="Welcome to PinIT📌" />
      <h2 className="text-lg px-4 text-center">
        Pin any ITU related news to this page to share it among the wonderful
        students of ITU! 🥳
      </h2>
      <Chat />
    </div>
  );
}

export default App;
