"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeName } from "@/redux/slice/headerSlice";

function Nav_button(props: any) {
  const dispatch = useDispatch();

  const title = useSelector((state: any) => state.currentPage);

  const setPages = () => {
    dispatch(changeName(props.currentPage));
  };

  return (
    <button
      id={props.currentPage}
      onClick={setPages}
      className="size-8 bg-black shadow-md shadow-zinc-700 rounded-full  flex justify-center items-center group active:translate-y-0.5"
    >
      {/* Use font awesomes component icons u declared as a props */}
      {props.icon}
    </button>
  );
}

export default Nav_button;
