import React from "react";

const AuthBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full bg-slate-500 flex p-">
      <div className="flex-1 h-full bg-white  p-[30px]">
        <h1 className="text-2xl">Universe</h1>
        <div className="flex justify-center  items-center w-full h-[90%]">{children}</div>
      </div>
      <div className="flex-[2] h-full bg-zinc-500 hidden lg:block "></div>
    </div>
  );
};

export default AuthBackground;
