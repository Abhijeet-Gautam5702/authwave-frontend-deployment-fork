"use client";

import Input from "@/components/input";
import PrimaryBtn from "@/components/buttons/primary-btn";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { adminAuthService } from "@/services/admin-auth.service";
import { useRouter } from "next/navigation";

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<SignupFormInputs>();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: SignupFormInputs) => {
    setLoading(true);
    try {
      const response = await adminAuthService.signup(data);
      if (response.success) {
        console.log(response);
        // Send a toast notification

        // Clear the form
        reset();
        // Redirect to login page
        router.push("/login");
      }
      clearErrors();
    } catch (error: any) {
      // Send error toast notification
      if (error.type === "ALREADY_EXISTS") {
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-20"
        >
          {/* Name input */}
          <div className="w-[350px] 2xl:w-[500px] flex flex-col items-center justify-center gap-10">
            <Input
              widthStyle="w-full"
              label="Name"
              placeholder="Enter your name"
              type="text"
              error={errors.name?.message}
              register={register}
              name="name"
              registerOptions={{
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Username must be at most 30 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                  message:
                    "Name can only contain letters and single spaces between words. No numbers or special characters allowed.",
                },
              }}
            />
            {errors.name?.message && (
              <span className="bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Email input */}
          <div className="w-[350px] 2xl:w-[500px] flex flex-col items-center justify-center gap-10">
            <Input
              widthStyle="w-full"
              label="Email"
              placeholder="Enter your email"
              type="email"
              error={errors.email?.message}
              register={register}
              name="email"
              registerOptions={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
            />
            {errors.email?.message && (
              <span className="bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Password input */}
          <div className="w-[350px] 2xl:w-[500px] flex flex-col items-center justify-center gap-10">
            <Input
              widthStyle="w-full"
              label="Password"
              placeholder="Enter your password"
              type="password"
              error={errors.password?.message}
              register={register}
              name="password"
              registerOptions={{
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
                  message:
                    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)",
                },
              }}
            />
            {errors.password?.message && (
              <span className="bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* Confirm Password input */}
          {/* <div className="w-[350px] 2xl:w-[500px] flex flex-col items-center justify-center gap-10">
            <Input
              widthStyle="w-full"
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              error={errors.confirmPassword?.message}
              register={register}
              name="confirmPassword"
              registerOptions={{
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              }}
            />
            {errors.confirmPassword?.message && (
              <span className="bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.confirmPassword.message}
              </span>
            )}
          </div> */}
          {/* Signup button */}
          <PrimaryBtn
            text="Sign up"
            type="submit"
            className="w-[350px] 2xl:w-[500px]"
            loading={loading}
          />
          {/* Login link */}
          <div className="flex items-center gap-8 text-14 2xl:text-20">
            <span className="text-white-1 font-thin">
              Already have an account?
            </span>
            <Link
              href="/login"
              replace
              className="text-white font-medium hover:text-p-accent"
            >
              Login
            </Link>
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SignupPage;
