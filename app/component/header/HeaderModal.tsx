"use client";
import React from "react";
import { LogoutButton } from "../AuthButtons";

function HeaderModal() {
  return (
    <div
      id="h-modal"
      className="not-visible flex flex-col items-center absolute bg-slate-200 rounded-lg p-5 right-20 top-10 border border-slate-500 gap-2"
    >
      <h3>Etes vous sûr ?</h3>
      <div className="flex flex-row gap-5">
        <LogoutButton />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Non
        </button>
      </div>
    </div>
  );
}

export default HeaderModal;
