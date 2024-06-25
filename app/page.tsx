import { auth } from "@/src/lib/auth";
import { LoginButton } from "./component/AuthButtons";
import Header from "./component/header/Header";
import Phone_nav from "./component/nav/Phone_nav";
import _Content from "./component/content/_Content";
import AddPostModal from "./component/nav/Creation_ modal/AddPostModal";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <main className="flex min-h-screen flex-col h-lvh bg-zinc-400 items-center">
        <Header />
        <_Content />
        <AddPostModal />
        <Phone_nav />
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen h-lvh flex-col bg-zinc-400 items-center justify-center">
        <div className="flex flex-col size-96 rounded-2xl bg-zinc-300 drop-shadow-xl shadow-slate-600 justify-center items-center">
          <h1>SEAGULL</h1>
          <LoginButton />
        </div>
      </main>
    );
  }
}
