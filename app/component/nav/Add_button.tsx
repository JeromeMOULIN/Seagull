"use client";

import { switchStatue } from "@/redux/slice/modalSlice";
import { useDispatch } from "react-redux";

function Add_button(props: any) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(switchStatue(true));
  };

  return (
    <button
      onClick={openModal}
      className=" group size-10 bg-zinc-200 border border-slate-500 shadow-md shadow-zinc-700 rounded-full  flex justify-center items-center active:translate-y-0.5"
    >
      {/* Use font awesomes component icons u declared as a props */}
      {props.icon}
    </button>
  );
}

export default Add_button;
