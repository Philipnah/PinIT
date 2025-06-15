import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function InputField() {
  const [inputField, setInputField] = useState<string>("");

  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4">
      <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-lg border p-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <Input
            placeholder="Type something to pin here..."
            className="w-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:-translate-y-1 focus:shadow-lg"
            onChange={(event) => setInputField(event.target.value)}
          />
          <Button
            type="submit"
            onClick={() => handlePinButtonClick(inputField)}
            className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm"
          >
            Pin 📌
          </Button>
        </div>
      </div>
    </footer>
  );
}

function handlePinButtonClick(text: string) {
  console.log("User wanted to pin: " + text);
}
