import Cards from "./Pins";
import InputBar from "./InputBar";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Cards />
      <InputBar />
    </div>
  );
}
