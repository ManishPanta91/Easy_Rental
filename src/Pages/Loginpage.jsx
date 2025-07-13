import React, { useState } from "react";
import * as Yup from "yup";
import { useLoginUserMutation } from "../App/auth/userApi";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Validation schema
export const LoginpageSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string().required("Enter your password"),
});

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
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
              onBlur={handleBlur}
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
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
            <button
              type="button"
              className="absolute right-3 mt-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
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
