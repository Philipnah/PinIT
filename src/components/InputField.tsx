import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import supabase from "@/utils/supabase";

export default function InputField() {
  const [inputField, setInputField] = useState<string>("");

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputField == "") return;

    publishPin(inputField);
    setInputField("");
  }

  async function publishPin(text: string) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const userEmail: string = user?.email ? user?.email : "Email is undefined";

    console.log(userEmail + " wanted to pin: " + text);

    const pinToInsert = {
      author: userEmail,
      title: "Title not implemented",
      content: text,
    };

    const { error } = await supabase.from("pins").insert(pinToInsert);

    if (error != null) console.error(error);
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
