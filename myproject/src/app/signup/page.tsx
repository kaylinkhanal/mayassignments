'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Define a phone regex pattern (adjust as needed)
const phoneRegExp = /^(\+?\d{1,3}[- ]?)?\d{10,15}$/;

const SignupSchema = Yup.object().shape({
firstName: Yup.string()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required'),
lastName: Yup.string()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required'),
email: Yup.string().email('Invalid email').required('Required'),
phone: Yup.string()
.matches(phoneRegExp, 'Phone number is not valid')
.required('Required'),
password: Yup.string()
.min(6, 'Password too short!')
.required('Required'),
confirmPassword: Yup.string()
.oneOf([Yup.ref('password'),], 'Passwords must match')
.required('Required'),
});

const SignUp = () => (
<div>
<Formik
initialValues={{
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  }}
  validationSchema={SignupSchema}
  onSubmit={values => {
  console.log(values);
  }}
  >  
  {({ errors, touched }) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-zinc-800 to-gray-900 p-6">
  <div className="relative bg-gradient-to-tr from-gray-800 to-slate-700 rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-10 w-full max-w-2xl text-white">
  <Form className="grid grid-cols-1 gap-6 font-[Inter]">
  <div>
  <h1 className="text-3xl font-bold italic text-center text-white drop-shadow-sm tracking-wide">
  Hurry Up !
  </h1>

  <h1 className="text-3xl font-bold italic text-center text-white drop-shadow-sm tracking-wide">
Register an Account             
  </h1>
  </div>

   {/* First & Last Name */}
  <div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col gap-1">
  <Field
  name="firstName"
  placeholder="First Name"
  className="px-4 py-3 rounded-md border border-gray-600 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  {errors.firstName && touched.firstName && (
  <div className="text-red-400 text-sm">{errors.firstName}</div>
  )}
  </div>

  <div className="flex flex-col gap-1">
  <Field
  name="lastName"
  placeholder="Last Name"
  className="px-4 py-3 rounded-md border border-gray-600 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  {errors.lastName && touched.lastName && (
  <div className="text-red-400 text-sm">{errors.lastName}</div>
  )}
  </div>
  </div>

  {/* Email */}
  <div className="flex flex-col gap-1">
  <Field
  name="email"
  type="email"
  placeholder="Email Address"
  className="px-4 py-3 rounded-md border border-gray-600 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  {errors.email && touched.email && (
  <div className="text-red-400 text-sm">{errors.email}</div>
  )}
  </div>

  {/* Contact Number */}
  <div className="flex flex-col gap-1">
  <Field
  name="phone"
  type="tel"
  placeholder="Contact Number"
  className="px-4 py-3 rounded-md border border-gray-600 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"                
  />
  {errors.phone && touched.phone && (
  <div className="text-red-400 text-sm">{errors.phone}</div>
  )}
  </div>

  {/* Password & Confirm Password */}
  <div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col gap-1">
  <Field
  name="password"
  type="password"
  placeholder="Password"
  className="px-4 py-3 rounded-md border border-gray-600 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  {errors.password && touched.password && (
  <div className="text-red-400 text-sm">{errors.password}</div>
  )}
  </div>

  <div className="flex flex-col gap-1">
  <Field
  name="confirmPassword"
  type="password"
  placeholder="Confirm Password"
  className="px-4 py-3 rounded-md border border-gray-600 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  {errors.confirmPassword && touched.confirmPassword && (
  <div className="text-red-400 text-sm">{errors.confirmPassword}</div>
  )}
  </div>
  </div>

  {/* Submit Button */}
  <div className="flex justify-end gap-4 mt-4">
  <button
  type="reset"
  className="px-6 py-2 rounded-md border border-gray-400 text-white hover:bg-gray-700 transition"
  >
  Cancel
  </button>
  <button
  type="submit"
  className="px-6 py-2 rounded-md bg-cyan-500 text-white font-semibold hover:bg-cyan-600 shadow-md hover:scale-105 transition"
  >
  Register
  </button>
  </div>
  </Form>
  </div>
  </div>
  )}
  </Formik>
  </div>
  );
export default SignUp;
