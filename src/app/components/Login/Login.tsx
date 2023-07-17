"use client";
import React from "react";
import { Button, Checkbox, FloatingInput } from "@/app/components/UI";
import Link from "next/link";
import { Formik } from "formik";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { LoginAction } from "@/redux/services";

const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className=" w-full h-full flex items-center justify-center ">
      <div className="mt-auto md:mx-auto md:w-[400px] h-[80%] ">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors: any = {};

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            try {
              setSubmitting(true);

              dispatch(LoginAction(values.email, values.password));

              setSubmitting(false);
            } catch (err: any) {
              console.log(err);
            }
          }}
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
            <form onSubmit={handleSubmit} className="w-full h-full">
              <div className="mb-10">
                <h2 className="text-3xl">Welcome Back</h2>
                <span className="text-sm text-slate-600">Please enter your cradentials</span>
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

                <Link href={"/auth/forgot-password"} className="text-sm text-[#4f3cc9]">
                  Forgot Password?
                </Link>
              </div>

              <div className="block ">
                <Button type="submit" className={`w-full md:w-[150px] py-4 ${isSubmitting ? "!cursor-wait" : ""} }`}>
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </div>

              <div className="text-center w-full justify-center text-sm mt-10">
                Don&apos;t have an account?{" "}
                <Link href={"/auth/signup"} className="text-[#4f3cc9]">
                  Sign Up
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
