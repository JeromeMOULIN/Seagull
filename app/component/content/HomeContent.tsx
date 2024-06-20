import React from "react";
import Post from "../poste/Post";

export default function HomeContent() {
  return (
    <>
      {/* <h1>
    {session?.user
      ? "Authenticated " + session?.user.email
      : "Not authenticated"}
  </h1> */}
      <h3>HOME</h3>
      <div className="flex flex-col gap-2 items-center">
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
