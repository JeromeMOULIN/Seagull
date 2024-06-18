import { auth } from "@/src/lib/auth";
import { LoginButton, LogoutButton } from "./component/AuthButtons";
import Header from "./component/header/Header";
import Phone_nav from "./component/nav/Phone_nav";
import Post from "./component/poste/Post";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <main className="flex min-h-screen flex-col h-lvh bg-zinc-400 items-center">
        <Header />
        <div className="flex flex-col w-full h-full items-center py-5">
          {/* <h1>
            {session?.user
              ? "Authenticated " + session?.user.email
              : "Not authenticated"}
          </h1> */}
          <Post />
        </div>
        <Phone_nav />
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col bg-zinc-400 items-center justify-between">
        {!session?.user ? <LoginButton /> : <LogoutButton />}
      </main>
    );
  }
}
