"use client";
import React from "react";

import { useSelector } from "react-redux";
import Chat from "./CHAT/Chat";
import HomeContent from "./HOME/HomeContent";
import Search from "./SEARCH/Search";
import Profil from "./PROFIL/Profil";

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
    <div className="flex flex-col size-full items-center overflow-scroll">
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
