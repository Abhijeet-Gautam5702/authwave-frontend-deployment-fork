"use client";

import Input from "@/components/input";
import PrimaryBtn from "@/components/buttons/primary-btn";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { adminAuthService } from "@/services/admin-auth.service";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useToast } from "@/utils/toast-notification";
import { SectionLoader } from "@/components/loaders/section-loader";

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
        // Clear the form
        reset();
        // Redirect to login page
        router.push("/login");

        // Send a toast notification
        useToast({
          message: "Admin account created. Please login.",
          delay: 300,
          icon: IoCheckmarkCircle,
          iconStyle: "text-p-accent",
        });
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

  if (loading) {
    return <SectionLoader />;
  }

  return (<form
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
    </div>
    {/* Signup button */}
    <PrimaryBtn
      text="Sign up"
      type="submit"
      className="w-[350px] 2xl:w-[500px]"
      loading={loading}
    />
    {/* Login link */}
    <div className="flex items-center gap-8 text-14 2xl:text-20">
      <span className="text-white-1 font-thin">Already have an account?</span>
      <Link
        href="/login"
        replace
        className="text-white font-medium hover:text-p-accent"
      >
        Login
      </Link>
    </div>
  </form>);
};

export default SignupPage;
