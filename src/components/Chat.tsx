import Cards from "./Pins";
import InputField from "./InputField";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Cards />
      <InputField />
    </div>
  );
}
