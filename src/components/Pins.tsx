import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import SpinnerCircle3 from "./Spinner";
import AnimatedPin from "./AnimatedPin";

export default function Cards() {
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    getPins();
  }, []);

  async function getPins() {
    const { data, error } = await supabase.from("pins").select();
    if (error) {
      console.error(error);
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

  if (pins.length == 0) {
    return <SpinnerCircle3 />;
  }

  return (
    // The mb-20 is to make space for the input bar at the bottom
    <div className="w-full mb-20">
      {pins.map((pin) => {
        return <AnimatedPin pin={pin} key={pin.id} />;
      })}
    </div>
  );
}
