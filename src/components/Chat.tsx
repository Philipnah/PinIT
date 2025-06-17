import Cards from "./Pins";
import InputField from "./InputField";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 font-fancy">
      <Cards />
      <InputField />
    </div>
  );
}
