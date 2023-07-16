import { Signup } from "@/app/components/Signup";
import { AuthBackground } from "@/app/components/UI";
import React from "react";

const Page = () => {
  return (
    <AuthBackground>
      <Signup />
    </AuthBackground>
  );
};

export default Page;
