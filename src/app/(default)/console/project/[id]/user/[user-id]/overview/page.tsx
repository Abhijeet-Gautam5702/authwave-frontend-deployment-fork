"use client";

import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Protected from "@/components/protected";
import {
  DeleteUserCard,
  PromoteUserCard,
  UserDetailsCard,
} from "@/components/cards/user-card";
import { getProjectById } from "@/store/project/project.slice";
import { projectService } from "@/services/project.service";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { AccountSettingCard } from "@/components/cards/account-setting-card";
import { SectionLoader } from "@/components/loaders/section-loader";

interface IUserFormData {
  username: string;
  email: string;
}

const OverviewPage = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params["user-id"] as string;
  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await projectService.getUserDetails(
          project?._id as string,
          project?.projectKey as string,
          userId
        );
        if (response.success) {
          console.log(response.data.user);
          setUser(response.data.user);
          reset({
            username: response.data.user.username,
            email: response.data.user.email,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<IUserFormData>({
    defaultValues: {
      username: user?.username,
      email: user?.email,
    },
  });

  // Card-methods
  const submitName = async (data: Partial<IUserFormData>) => {
    try {
      setLoading(true);
      const response = await projectService.updateUserDetails(
        project?._id as string,
        project?.projectKey as string,
        userId,
        {
          username: data.username,
        }
      );
      if (response.success) {
        console.log(response); //debugging
        // Send success toast notification

        // reset the form
        reset({
          username: data.username,
          email: user?.email,
        });

        // Modify the user state
        setUser((prev: any) => ({
          ...prev,
          username: data.username,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitEmail = async (data: Partial<IUserFormData>) => {
    try {
      setLoading(true);
      const response = await projectService.updateUserDetails(
        project?._id as string,
        project?.projectKey as string,
        userId,
        { email: data.email }
      );
      if (response.success) {
        console.log(response); //debugging
        // Send success toast notification

        // reset the form
        reset({
          username: user?.username,
          email: data.email,
        });

        // Modify the user state
        setUser((prev: any) => ({
          ...prev,
          isVerified: false,
          email: data.email,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    try {
      setLoading(true);
      const response = await projectService.deleteUser(
        project?._id as string,
        project?.projectKey as string,
        userId
      );
      if (response.success) {
        console.log(response); //debugging
        // Send success toast notification

        // redirect to the project-overview page
        router.replace(`/console/project/${project?._id}/overview/users`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const verifyUser = async () => {
    if (user?.isVerified) {
      // Send toast notification
      return;
    }
    try {
      setLoading(true);
      const response = await projectService.verifyUser(
        project?._id as string,
        project?.projectKey as string,
        userId
      );
      if (response.success) {
        console.log(response); //debugging
        // Send success toast notification

        // Modify the user state
        setUser((prev: any) => ({
          ...prev,
          isVerified: true,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // FEATURE TO BE ADDED IN THE FUTURE
  const promoteUser = async () => {
    try {
      // TODO: Implement user promotion logic
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  if (loading) {
    return <SectionLoader />;
  }
  return (
    <div className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
      <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
        {user && <UserDetailsCard user={user} verifyUser={verifyUser} />}
      </section>
      <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
        <AccountSettingCard
          title="Name"
          description="Please do not update the user-name very frequently as it makes it difficult for us to maintain our records."
          buttonText="Update"
          buttonClick={handleSubmit(submitName)}
          inputPlaceholder="Enter user name"
          register={register}
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
          inputName="username"
          inputError={errors.username?.message}
        />
        <AccountSettingCard
          title="Email"
          description="Update user's email address. An Email should be formatted as: name@example.com."
          buttonText="Update"
          buttonClick={handleSubmit(submitEmail)}
          inputPlaceholder="Enter user email"
          register={register}
          registerOptions={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          inputName="email"
          inputError={errors.email?.message}
        />
      </section>

      <section className="w-full flex flex-col justify-start items-start 2xl:gap-30 gap-20">
        <p className="text-18 2xl:text-24 w-full rounded-6 2xl:rounded-10 bg-danger-2/15 text-danger-2 font-medium p-12 2xl:p-20 text-center">
          DANGER ZONE
        </p>
        {/* FEATURE TO BE ADDED IN THE FUTURE */}
        {/* <PromoteUserCard /> */}
        <DeleteUserCard onDeleteUser={deleteUser} />
      </section>
    </div>
  );
};

export default Protected(OverviewPage);
