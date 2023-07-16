import { Login } from "@/app/components/Login";
import { AuthBackground } from "@/app/components/UI";
import React from "react";

const Page = () => {
  return (
    <AuthBackground>
      <Login />
    </AuthBackground>
  );
};

export default Page;
