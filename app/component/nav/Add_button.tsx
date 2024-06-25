"use client";
function Add_button(props: any) {
  return (
    <button className="size-10 bg-zinc-200 border border-slate-500 shadow-md shadow-zinc-700 rounded-full  flex justify-center items-center">
      {/* Use font awesomes component icons u declared as a props */}
      {props.icon}
    </button>
  );
}

export default Add_button;
