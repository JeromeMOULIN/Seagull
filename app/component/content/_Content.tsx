"use client";
import React from "react";
import HomeContent from "./HomeContent";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import Search from "./Search";
import Profil from "./Profil";

function _Content() {
  const title = useSelector((state: any) => state.currentPage);

  const Switch = () => {
    switch (title.text) {
      case "HOME":
        return <HomeContent />;
      case "CHAT":
        return <Chat />;
      case "RECHERCHE":
        return <Search />;
      case "PROFILE":
        return <Profil />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center py-5">
      {Switch()}
    </div>
  );
}

export default _Content;

{
  /* <h1>
{session?.user
? "Authenticated " + session?.user.email
: "Not authenticated"}
</h1> */
}
