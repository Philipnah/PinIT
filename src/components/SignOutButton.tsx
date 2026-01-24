import supabase from "@/utils/supabase";
import { Button } from "./ui/button";

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
}

export default function SignOutButton() {
  return (
    <Button
      className="bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white border hover:border-transparent hover:text-white dark:hover:text-black transition-all duration-200 hover:shadow-lg"
      onClick={signOut}
    >
      Sign Out 👋
    </Button>
  );
}
