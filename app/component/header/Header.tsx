"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import HeaderModal from "./HeaderModal";
import { useSelector } from "react-redux";

function Header() {
  const switchModal = () => {
    document.getElementById("h-modal")?.classList.toggle("not-visible");
  };

  const title = useSelector((state: any) => state.currentPage);

  return (
    <header className="h-16 w-full relative z-10 bg-zinc-200 rounded-b-lg flex flex-row justify-between items-center px-16 drop-shadow-lg border-b border-slate-500">
      <h2>{title[0].text}</h2>
      <button onClick={switchModal}>
        <FontAwesomeIcon className="h-4 w-4" icon={faArrowRightFromBracket} />
      </button>
      <HeaderModal />
    </header>
  );
}

export default Header;
