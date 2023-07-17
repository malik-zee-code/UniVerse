import React from "react";

const AuthBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full bg-slate-500 flex ">
      <div className=" flex-1 md:flex-[2] h-full bg-white p-5">
        <h1 className="text-2xl">Universe</h1>
        <div className="flex justify-center  items-center w-full h-[90%]">{children}</div>
      </div>
      <div className="flex-1 h-full bg-zinc-500 hidden  lg:block ">
        <video
          playsInline
          className="h-full object-cover w-full"
          autoPlay
          loop
          muted
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
        ></video>
      </div>
    </div>
  );
};

export default AuthBackground;
