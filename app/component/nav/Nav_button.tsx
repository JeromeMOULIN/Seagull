"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeName } from "@/redux/slice/headerSlice";

function Nav_button(props: any) {
  const dispatch = useDispatch();

  const title = useSelector((state: any) => state.currentPage);

  const setPages = () => {
    console.log(title);
    dispatch(changeName(props.currentPage));

    console.log(title);
  };

  const page = () => {
    console.log(props.currentPage);
  };

  return (
    <button
      onClick={setPages}
      className="h-8 w-8 bg-black shadow-md shadow-zinc-700 rounded-full  flex justify-center items-center"
    >
      {/* Use font awesomes component icons u declared as a props */}
      {props.icon}
    </button>
  );
}

export default Nav_button;
