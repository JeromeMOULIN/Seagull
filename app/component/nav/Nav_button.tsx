"use client";
function Nav_button(props: any) {
  return (
    <button className="h-8 w-8 bg-black shadow-md shadow-zinc-700 rounded-full  flex justify-center items-center">
      {/* Use font awesomes component icons u declared as a props */}
      {props.icon}
    </button>
  );
}

export default Nav_button;
