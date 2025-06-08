import supabase from "@/utils/supabase";
import { Button } from "./ui/button";

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
}

export default function SignOutButton() {
  return <Button onClick={signOut}>Sign Out</Button>;
}
