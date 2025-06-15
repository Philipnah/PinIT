import supabase from "@/utils/supabase";
import { Button } from "./ui/button";

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
}

export default function SignOutButton() {
  return (
    <Button
      className="bg-transparent text-black border hover:border-transparent hover:text-white transition-all duration-200 hover:shadow-lg"
      onClick={signOut}
    >
      Sign Out 👋
    </Button>
  );
}
