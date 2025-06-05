import { createClient } from "@supabase/supabase-js";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useState } from "react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type Pin = {
  id: number;
  created_at: string;
  author: string;
  title: string;
  content: string;
};

export default function Cards() {
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    getPins();
  }, []);

  async function getPins() {
    const { data, error } = await supabase.from("pins").select();
    if (error) {
      console.log(error);
    }

    if (data != null) {
      setPins(data as Pin[]);
    } else {
      setPins([
        {
          id: 0,
          created_at: new Date(Date.now()).toISOString(),
          author: "author",
          title: "title",
          content: "Content here...",
        },
      ]);
    }
  }

  function prettierISO(ISOString: string) {
    return ISOString.split(".")[0].replace("T", " ");
  }

  return (
    <div className="w-full">
      {pins.map((pin) => {
        return (
          <Card
            key={pin.id}
            className="w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle>{pin.title}</CardTitle>
              <CardDescription>
                {pin.author}
                <br />
                {prettierISO(pin.created_at)}
              </CardDescription>
              <CardAction>Copy to Clipboard</CardAction>
            </CardHeader>
            <CardContent>
              <p>{pin.content}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
