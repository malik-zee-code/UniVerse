"use client";
import React from "react";
import { Button, Checkbox, FloatingInput } from "@/app/components/UI";
import Link from "next/link";
import { Formik } from "formik";

const Login = () => {
  return (
    <div className=" w-full h-full flex items-center  ">
      <div className="mt-auto mx-auto w-[80%] h-[80%] ">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <h2 className="text-3xl">Welcome Back</h2>
                <span className="text-sm text-slate-600">Please enter your details so we can continue</span>
              </div>

              <div className="flex flex-col w-full mt-16 ">
                <FloatingInput
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  placeholder="example@domain.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <p className="text-xs text-red-500"> {errors.email && touched.email && errors.email}</p>
                <FloatingInput
                  type="password"
                  name="password"
                  id="password"
                  label="password"
                  placeholder="********"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="my-4"
                />
              </div>

              <div className="w-full flex justify-between">
                <Checkbox id="remember" value="remember-me" label="Remember Me" />

                <Link href={"/auth/forgot-password"} className="text-sm">
                  Forgot Password?
                </Link>
              </div>

              <div className="block ">
                <Button type="submit" className="w-full py-3 ">
                  Sign In
                </Button>
              </div>

              <div className="text-center w-full justify-center text-sm mt-10">
                Don&apos;t have an account? <Link href={"/auth/signup"}>Sign Up</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
