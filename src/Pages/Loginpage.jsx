// Loginpage.jsx
import React from "react";
import * as Yup from "yup";
import { useLoginUserMutation } from "../App/auth/userApi";
import { useFormik } from "formik";
import { toast } from "react-toastify";

// Validation schema
export const LoginpageSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string().required("Enter your password"),
});

const Loginpage = () => {
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginpageSchema,
    onSubmit: async (val) => {
      try {
        const response = await loginUser(val).unwrap();
        console.log("Login successful", response);
        toast.success("Login successful");
      } catch (err) {
        console.error("Login error:", err);
        toast.error("Login failed");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl px-8 py-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-[#025CA3] mb-6">
          LOGIN
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              👁️
            </button>
          </div>

          {/* Login Button */}
          <button
            disabled={isLoggingIn}
            type="submit"
            className="w-full bg-[#025CA3] text-white font-semibold py-2 rounded-md hover:bg-[#014a82] transition duration-200"
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
