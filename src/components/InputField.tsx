import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import supabase from "@/utils/supabase";

export default function InputField() {
  const [inputField, setInputField] = useState<string>("");

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputField == "") return;

    handlePinButtonClick(inputField);
    setInputField("");
  }

  async function handlePinButtonClick(text: string) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user?.email + " wanted to pin: " + text);
  }

  return (
    <form
      className="fixed bottom-0 left-0 right-0 p-4"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-lg border p-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <Input
            placeholder="Type something to pin here..."
            type="text"
            value={inputField}
            className="w-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:-translate-y-1 focus:shadow-lg"
            onChange={(event) => setInputField(event.target.value)}
          />
          <Button
            type="submit"
            className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm"
          >
            Pin 📌
          </Button>
        </div>
      </div>
    </form>
  );
}
