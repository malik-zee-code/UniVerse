import React from "react";

const page = () => {
  return (
    <div className="w-full h-full bg-slate-500 flex">
      {/* left div */}
      <div className="flex-1 h-full bg-white  p-[30px]">
        <h1 className="">Universe</h1>
      </div>

      {/* right div */}
      <div className="flex-1 h-full bg-zinc-500"></div>
    </div>
  );
};

export default page;
