import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useSignUserMutation } from "../App/auth/userApi"; // ✅ Adjust path if needed
import { FaEye, FaEyeSlash } from "react-icons/fa";

// ✅ Validation Schema
export const SignupSchema = Yup.object({
  name: Yup.string().required("Enter your name"),
  email: Yup.string().email("Invalid email").required("Enter your email"),
  address: Yup.string().required("Enter your address"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Enter your phone number"),
  password: Yup.string().min(6, "Min 6 characters").required("Enter password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const Signuppage = () => {
  const [registerUser, { isLoading }] = useSignUserMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (val) => {
      try {
        const response = await registerUser(val).unwrap();
        console.log("Registration success:", response);
        toast.success("Registration successful");
        resetForm();
      } catch (err) {
        console.error("Registration error:", err);
        toast.error("Registration failed");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl px-8 py-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-[#025CA3] mb-6">
          REGISTER
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
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
              placeholder="Enter an email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              id="address"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
            {errors.address && touched.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
            {errors.phone && touched.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
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
              placeholder="Enter password"
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

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type={showCPassword ? "text" : "password"}
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              placeholder="Re-enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />

            <button
              type="button"
              className="absolute right-3 mt-3 text-gray-500"
              onClick={() => setShowCPassword(!showCPassword)}
            >
              {showCPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#025CA3] text-white font-semibold py-2 rounded-md hover:bg-[#014a82] transition duration-200"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signuppage;
