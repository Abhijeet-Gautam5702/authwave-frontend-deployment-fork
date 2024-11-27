"use client";

import Input from "@/components/input";
import ActionBtn from "@/components/buttons/action-btn";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { projectService } from "@/services/project.service";
import { Project, storeUpdateProject } from "@/store/project/project.slice";

interface SecurityCardProps {
  project: Project;
}

export const SecuritySettingCard = ({ project }: SecurityCardProps) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    clearErrors,
    reset,
    handleSubmit,
  } = useForm<{ userLimit: number; userSessionLimit: number }>({
    defaultValues: {
      userLimit: project.config.security?.userLimit,
      userSessionLimit: project.config.security?.userSessionLimit,
    },
  });

  /* ------------ Reset Security Limits ------------ */
  const resetLimits = async () => {
    try {
      clearErrors();
      const response = await projectService.updateSecuritySettings(
        project._id,
        project.projectKey,
        {
          userLimit: 100,
          userSessionLimit: 5,
        }
      );
      if (response.success) {
        console.log(response);
        // Send success toast

        // reset the form values
        reset({
          userLimit: 100,
          userSessionLimit: 5,
        });

        // update the project store
        dispatch(
          storeUpdateProject({
            _id: project._id,
            config: {
              security: {
                userLimit: 100,
                userSessionLimit: 5,
              },
            },
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* ------------ Update Security Limits ------------ */
  const updateLimits = async (data: {
    userLimit: number;
    userSessionLimit: number;
  }) => {
    try {
      clearErrors();
      const response = await projectService.updateSecuritySettings(
        project._id,
        project.projectKey,
        {
          userLimit: data.userLimit,
          userSessionLimit: data.userSessionLimit,
        }
      );
      if (response.success) {
        console.log(response);
        // Send success toast

        // reset the form values
        reset({
          userLimit: data.userLimit,
          userSessionLimit: data.userSessionLimit,
        });

        // update the project store
        dispatch(
          storeUpdateProject({
            _id: project._id,
            config: {
              security: {
                userLimit: data.userLimit,
                userSessionLimit: data.userSessionLimit,
              },
            },
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-30 gap-20 p-26 2xl:p-40 rounded-12 2xl:rounded-16">
      {/* Setting title and input container */}
      <div className="w-full flex flex-row justify-between items-start gap-30 2xl:gap-40">
        {/* Title and Description */}
        <div className="w-1/2 flex flex-col justify-start items-start gap-0">
          <p className="text-20 2xl:text-24 font-medium">Users</p>
          <p className="text-12 2xl:text-18 text-white/50">
            Set an upper limit to the number of users that can enroll in the app
            (maximum 1000) and the number of sessions of each user (maximum 10).
          </p>
        </div>

        {/* Input Components */}
        <div className="w-1/2 flex flex-col justify-start items-start gap-10">
          <Input
            additionalStyle="text-14 2xl:text-18"
            widthStyle="w-full"
            name="userLimit"
            register={register}
            label="User Limit"
            labelStyle="text-14 2xl:text-18"
            type="number"
            registerOptions={{
              required: "User limit is required",
              valueAsNumber: true,
              min: {
                value: 100,
                message: "User limit must be at least 100",
              },
              max: {
                value: 1000,
                message: "User limit cannot exceed 1000",
              },
              validate: (value: number) => {
                return Number.isInteger(value) || "Must be a whole number";
              },
            }}
            error={errors.userLimit?.message}
          />
          <Input
            additionalStyle="text-14 2xl:text-18"
            widthStyle="w-full"
            name="userSessionLimit"
            register={register}
            label="User Session Limit"
            labelStyle="text-14 2xl:text-18"
            type="number"
            registerOptions={{
              required: "User session limit is required",
              valueAsNumber: true,
              min: {
                value: 5,
                message: "User session limit must be at least 5",
              },
              max: {
                value: 10,
                message: "User session limit cannot exceed 10",
              },
              validate: (value: number) => {
                return Number.isInteger(value) || "Must be a whole number";
              },
            }}
            error={errors.userSessionLimit?.message}
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full flex flex-row justify-between items-end gap-10">
        <p
          onClick={handleSubmit(resetLimits)}
          className="text-12 2xl:text-16 text-white underline cursor-pointer"
        >
          Reset to default
        </p>
        <ActionBtn
          type="submit"
          text="Update"
          onClick={handleSubmit(updateLimits)}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px] border-white text-white"
        />
      </div>
    </section>
  );
};

export const EmailTemplateCard = () => {
  return <div>EmailTemplateCard</div>;
};
