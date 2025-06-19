import { type Session } from "@supabase/supabase-js";
import supabase from "./utils/supabase";
import Chat from "./components/Chat";
import Title from "./components/Title";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import SignOutButton from "./components/SignOutButton";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Analytics />

      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          localization={{
            variables: {
              sign_up: {
                email_label: "You must sign up using your ITU email address",
              },
              sign_in: { email_label: "Your ITU email address" },
            },
          }}
        />
      ) : (
        <>
          <div className="absolute top-4 right-4">
            <SignOutButton />
          </div>
          <Title text="Welcome to PinIT📌" />
          <h2 className="text-lg px-4 text-center">
            Pin any ITU related news to this page to share it among the
            wonderful students of ITU! 🥳
          </h2>
          <Chat />
        </>
      )}
    </div>
  );
}

export default App;
