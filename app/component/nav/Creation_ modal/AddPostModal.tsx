"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchStatue } from "@/redux/slice/modalSlice";

function AddPostModal() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state: any) => state.isOpen);

  const closeModal = () => {
    dispatch(switchStatue(false));
  };

  const modal = () => {
    if (modalIsOpen.isOpen === true) {
      return (
        <div className="flex flex-col absolute overflow-hidden size-full justify-center items-center bg-gray-500/75 z-50">
          <div className="flex flex-col absolute top-full translate-y-[-150%] justify-center items-center size-2/4 bg-slate-200 rounded-lg drop-shadow-2xl border border-slate-500 shadow-black">
            <FontAwesomeIcon
              onClick={closeModal}
              className="size-4 absolute top-0 right-0 m-5 border border-black rounded-full p-1"
              icon={faXmark}
            />
            <form action=""></form>
          </div>
        </div>
      );
    }
  };
  return <>{modal()}</>;
}

export default AddPostModal;
