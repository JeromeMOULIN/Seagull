"use client";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("github")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-w-48"
    >
      Login with github
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Oui
    </button>
  );
};
