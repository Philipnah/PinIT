import Cards from "./Cards";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Cards />
      <div className="flex flex-row items-center justify-center gap-4 max-w-2xl px-4">
        <Input
          placeholder="Type something to pin here..."
          className="w-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:-translate-y-1 focus:shadow-lg"
        />
        <Button
          type="submit"
          onClick={handlePinButtonClick}
          className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm"
        >
          Pin
        </Button>
      </div>
    </div>
  );
}

const handlePinButtonClick = () => {
  console.log("User pressed Pin!");
};
