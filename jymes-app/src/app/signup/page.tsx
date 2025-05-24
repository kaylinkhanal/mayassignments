"use client";
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// ✅ Validation Schema
const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Uffs! Must be at least 3 characters")
    .max(50, "Too long, must be 50 characters or less")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(3, "Uffs! Must be at least 3 characters")
    .max(50, "Too long, must be 50 characters or less")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white text-slate-800 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-5 flex justify-center">Register</h2>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div className="flex gap-2">
                <div className="w-1/2 space-y-1">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border rounded"
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="text-red-500 text-sm">
                      {errors.firstName}
                    </div>
                  )}
                </div>

                <div className="w-1/2 space-y-1">
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border rounded"
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="text-red-500 text-sm">
                      {errors.lastName}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border rounded"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded"
                />

                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border rounded"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold transition "
              >
                SIGN UP
              </button>
            </Form>
          )}
        </Formik>

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center gap-4 mb-4 text-xl">
          <button className="p-2 hover:bg-gray-200 rounded">
            <img src="google.png" className="w-6 h-6" alt="Google" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded">
            <img src="facebook.png" className="w-6 h-6" alt="Facebook" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded">
            <img src="linkedin.png" className="w-6 h-6" alt="LinkedIn" />
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Already have an Account?{" "}
          <Link href="/login" className="text-pink-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
