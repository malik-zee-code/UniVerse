"use client";
import React from "react";
import { Button, Checkbox, FloatingInput } from "@/app/components/UI";
import Link from "next/link";
import { Formik } from "formik";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { SignupAction } from "@/redux/services";

const Signup = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="h-full flex items-center justify-center ">
      <div className="mt-auto md:mx-auto sm:w-[400px] h-[80%] ">
        <Formik
          initialValues={{ email: "", password: "", firstName: "", lastName: "", confirmPassword: "" }}
          validate={(values) => {
            const errors: any = {};

            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Password didn't matched.";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            try {
              setSubmitting(true);
              console.log("heloo");

              dispatch(SignupAction({ ...values, confirmPassword: undefined }));

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
            <form onSubmit={handleSubmit} className=" h-full">
              <div className="mb-10">
                <h2 className="text-3xl">Sign up to UniVerse</h2>
              </div>

              <div className="flex flex-col mt-16 ">
                <div className="flex mb-4 flex-col sm:flex-row">
                  <FloatingInput
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    placeholder="John"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="sm:mr-3 sm:mb-0 mb-4 "
                  />
                  <FloatingInput
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    placeholder="Doe"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>

                <FloatingInput
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  placeholder="example@domain.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <FloatingInput
                  type="password"
                  name="password"
                  id="password"
                  label="Password"
                  placeholder="8+ Characters"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="my-4"
                />

                <FloatingInput
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="8+ Characters"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className=""
                />

                <p className="text-red-500 text-sm"> {touched.confirmPassword && errors.confirmPassword}</p>
              </div>

              <div className="flex items-start my-3 text-xs text-slate-500">
                <Checkbox id="tos" className="mt-1" label={``} value="approved-tos" />

                <label htmlFor="tos">
                  Creating an account means you’re okay with our{" "}
                  <Link className="text-[#4f3cc9]" href="/term-of-service">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={"privacy-policy"} className="text-[#4f3cc9]">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="block ">
                <Button
                  type="submit"
                  className={`w-full py-4 ${isSubmitting ? "!cursor-wait" : ""} }`}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </div>

              <div className="text-center w-full justify-center text-sm mt-10">
                Already have an account?{" "}
                <Link href={"/auth/login"} className="text-[#4f3cc9]">
                  Login
                </Link>
              </div>

              <div className="flex items-start my-3 text-xs text-slate-400">
                <label htmlFor="tos">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <Link className="text-[#4f3cc9]" href="/term-of-service">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={"privacy-policy"} className="text-[#4f3cc9]">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
