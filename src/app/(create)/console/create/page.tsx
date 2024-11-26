"use client";

import PrimaryBtn from "@/components/buttons/primary-btn";
import Input from "@/components/input";
import { projectService } from "@/services/project.service";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Loader, Loader2 } from "lucide-react";
import { storeAddProject } from "@/store/project/project.slice";
import { ErrorNotificationCard } from "@/components/cards/notification-card";

const CreateProjectPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    clearErrors();
    try {
      setLoading(true);
      const config = {
        loginMethods: {
          emailPassword: true,
        },
      };

      const projectData = {
        projectName: data.projectName,
        appName: data.appName,
        appEmail: data.appEmail,
        config: config,
      };

      const response = await projectService.createProject(projectData);

      if (response.success) {
        // Add project to the store
        dispatch(storeAddProject(response.data));
        // Redirect to projects page on success
        router.push("/console");

        // Show success toast

        // Reset form
        reset({
          projectName: "",
          appName: "",
          appEmail: "",
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full grow flex flex-row justify-center items-stretch text-white">
      {/* Error Panel */}
      <div className="w-2/5 p-20 2xl:p-30 pl-100 2xl:pl-200 grow bg-bg-2 flex flex-col justify-start items-end gap-16 2xl:gap-24">
        {errors.root ||
        errors.projectName ||
        errors.appName ||
        errors.appEmail ? (
          <>
            {errors.root && (
              <ErrorNotificationCard
                text={errors.root.message?.toString() || "Something went wrong"}
              />
            )}
            {errors.projectName && (
              <ErrorNotificationCard
                text={
                  errors.projectName.message?.toString() ||
                  "Project name is required"
                }
              />
            )}
            {errors.appName && (
              <ErrorNotificationCard
                text={
                  errors.appName.message?.toString() || "App name is required"
                }
              />
            )}
            {errors.appEmail && (
              <ErrorNotificationCard
                text={
                  errors.appEmail.message?.toString() || "App email is required"
                }
              />
            )}
          </>
        ) : (
          <div className="grow w-full flex-center">
            <p className=" text-14 2xl:text-18 font-medium text-success">
              Good to go!
            </p>
          </div>
        )}
      </div>

      {/* Form Panel */}
      <div className="w-3/5 p-20 2xl:p-30 pr-100 2xl:pr-200 grow bg-bg-1 flex flex-col justify-start items-start gap-24 2xl:gap-35">
        {/* Title */}
        <p className="text-20 2xl:text-26 font-medium">Project Details</p>
        {/* Input Fields */}
        <div className="w-2/3 2xl:w-4/5 flex flex-col justify-start items-start gap-24 2xl:gap-35">
          <Input
            name="projectName"
            register={register}
            label="Project Name"
            labelStyle="text-16 2xl:text-20"
            subText="Project name will be used to identify the project in the console"
            subTextStyle="text-12 2xl:text-16"
            placeholder="Enter Project Name"
            widthStyle="w-full"
            additionalStyle="text-14 2xl:text-18"
            disabled={loading}
            registerOptions={{
              required: true,
              pattern: {
                value: /^[a-zA-Z][a-zA-Z0-9_-]{6,62}[a-zA-Z0-9]$/,
                message:
                  "Project name must be 8-64 characters, start with a letter, and can only contain letters, numbers, hyphens and underscores",
              },
            }}
          />
          <Input
            name="appName"
            register={register}
            label="App Name"
            labelStyle="text-16 2xl:text-20"
            subText="App name will be used to communication purposes"
            subTextStyle="text-12 2xl:text-16"
            placeholder="Enter App Name"
            widthStyle="w-full"
            additionalStyle="text-14 2xl:text-18"
            disabled={loading}
            registerOptions={{
              required: true,
              pattern: {
                value: /^[a-zA-Z][a-zA-Z0-9\s-]{1,62}[a-zA-Z0-9]$/,
                message:
                  "App name must be 3-64 characters, start with a letter, and can only contain letters, numbers, spaces and hyphens",
              },
            }}
          />
          <Input
            name="appEmail"
            register={register}
            label="App Email"
            labelStyle="text-16 2xl:text-20"
            subText="App email will be used to communication purposes"
            subTextStyle="text-12 2xl:text-16"
            placeholder="Enter App Email"
            widthStyle="w-full"
            additionalStyle="text-14 2xl:text-18"
            disabled={loading}
            registerOptions={{
              required: true,
              pattern: {
                value:
                  /^[a-zA-Z][a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: "Please enter a valid email address",
              },
            }}
          />
        </div>
        {/* Submit Button */}
        <div className="w-full flex justify-start items-start">
          <PrimaryBtn
            text="Create new project"
            onClick={handleSubmit(onSubmit)}
            loading={loading}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
