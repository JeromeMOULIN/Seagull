"use client";
function Post() {
  return (
    <div className="w-10/12 p-2 bg-zinc-200 rounded-lg drop-shadow-2xl border border-slate-500">
      <div className="flex flex-row justify-between items-center border-b-2 border-zinc-400">
        <div className="flex flex-row items-center gap-x-4">
          <p className=" flex justify-center items-center h-11 w-11 bg-zinc-500 rounded-full mb-1 border-vlack-1">
            X
          </p>
          <p>UserName</p>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <p className="flex flex-row bg-zinc-400  h-6 px-2 rounded-full">
            128
          </p>
          <p className="flex flex-row bg-zinc-400  h-6 px-2 rounded-full">68</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ea
          odit temporibus molestias alias ab ratione fugiat repellendus a natus
          error dolores vero odio eaque laboriosam culpa minus, dolore
          reprehenderit?
        </p>
      </div>
    </div>
  );
}

export default Post;
