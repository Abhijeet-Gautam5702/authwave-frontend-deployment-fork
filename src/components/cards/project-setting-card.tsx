"use client";

import Input from "@/components/input";
import ActionBtn from "@/components/buttons/action-btn";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { projectService } from "@/services/project.service";
import {
  Project,
  storeDeleteProject,
  storeUpdateProject,
} from "@/store/project/project.slice";
import NotificationLabel from "../labels/notification-label";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import ToggleSwitch from "../toggle-swtich";
import { AccountSettingDangerCard } from "./account-setting-card";
import { useRouter, usePathname } from "next/navigation";
import Textarea from "@/components/textarea";
import { useToast } from "@/utils/toast-notification";
import { FaCircleCheck, FaKey, FaTrash } from "react-icons/fa6";

/* --------------- PROJECT SETTING SECURITY CARD --------------- */
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
      <div className="w-full flex flex-row justify-between items-stretch gap-30 2xl:gap-40">
        {/* Title and Description */}
        <div className="w-1/2 flex flex-col justify-start items-start gap-0">
          <p className="text-20 2xl:text-24 font-medium">Users</p>
          <p className="text-12 2xl:text-18 text-white/50 mb-auto">
            Set an upper limit to the number of users that can enroll in the app
            (maximum 1000) and the number of sessions of each user (maximum 10).
          </p>
          <NotificationLabel text="To increase the user limit, please contact Auth Wave via email" />
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

/* --------------- PROJECT SETTING OVERVIEW CARDS --------------- */

// CREDENTIALS CARD
interface CredentialsCardProps {
  project: Project;
}
export const CredentialsCard = ({ project }: CredentialsCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit, clearErrors, reset } = useForm<{
    projectId: string;
    projectKey: string;
  }>({
    defaultValues: {
      projectId: project._id,
      projectKey: project.projectKey,
    },
  });

  const generateNewProjectKey = async () => {
    setIsLoading(true);
    try {
      clearErrors();
      const response = await projectService.generateNewProjectKey(
        project._id,
        project.projectKey
      );
      if (response.success) {
        // update the project store
        dispatch(
          storeUpdateProject({
            _id: project._id,
            projectKey: response.data.projectKey,
          })
        );

        // Send a toast notification
        useToast({
          message: "New Project Key generated successfully",
          delay: 0,
          icon: FaCircleCheck,
          iconStyle: "text-p-accent",
        });

        // reset the form values
        reset({
          projectId: project._id,
          projectKey: response.data.projectKey,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-35 gap-25 p-26 2xl:p-40 rounded-12 2xl:rounded-16">
      {isLoading ? (
        <Loader2 className="w-10 h-10 animate-spin" />
      ) : (
        <>
          {/* Setting title and input container */}
          <div className="w-full flex flex-row justify-between items-stretch gap-30 2xl:gap-40">
            {/* Title and Description */}
            <div className="w-1/2 flex flex-col justify-start items-start gap-0">
              <p className="text-20 2xl:text-24 font-medium">
                Project Credentials
              </p>
              <p className="text-12 2xl:text-18 text-white/50 mb-auto">
                All the authentication services on your web application will be
                accessed using these credentials
              </p>
              <NotificationLabel text="If you suspect your project has been compromised, change the Project Key immediately" />
            </div>
            {/* Input Components */}
            <div className="w-1/2 flex flex-col justify-start items-start gap-10">
              <Input
                disabled
                additionalStyle="text-14 2xl:text-18"
                widthStyle="w-full"
                name="projectId"
                register={register}
                label="Project ID"
                labelStyle="text-14 2xl:text-18"
                type="text"
                icon={FiCopy}
                iconOnClick={() => navigator.clipboard.writeText(project._id)}
              />
              <Input
                disabled
                additionalStyle="text-14 2xl:text-18"
                widthStyle="w-full"
                name="projectKey"
                register={register}
                label="Project Key"
                labelStyle="text-14 2xl:text-18"
                type="text"
                icon={FiCopy}
                iconOnClick={() =>
                  navigator.clipboard.writeText(project.projectKey)
                }
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full flex flex-row justify-end items-center gap-10">
            <ActionBtn
              type="submit"
              text="Generate New Project Key"
              onClick={handleSubmit(generateNewProjectKey)}
              className="px-20 py-10 2xl:px-35 2xl:py-16 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px] border-white text-white"
            />
          </div>
        </>
      )}
    </section>
  );
};

// DETAILS CARD
interface DetailsCardProps {
  project: Project;
}
export const DetailsCard = ({ project }: DetailsCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    clearErrors,
    reset,
    handleSubmit,
  } = useForm<{
    projectName: string;
    appName: string;
    appEmail: string;
  }>({
    defaultValues: {
      projectName: project.projectName,
      appName: project.appName,
      appEmail: project.appEmail,
    },
  });

  const updateDetails = async (data: { appName: string; appEmail: string }) => {
    clearErrors();
    setIsLoading(true);
    try {
      if (data.appName !== project.appName) {
        const response = await projectService.updateAppName(
          project._id,
          project.projectKey,
          data.appName
        );
        if (response.success) {
          // Update the project-store
          dispatch(
            storeUpdateProject({
              _id: project._id,
              appName: data.appName,
            })
          );

          // Send a toast notification
          useToast({
            message: "App Name updated successfully",
            delay: 0,
            icon: FaCircleCheck,
            iconStyle: "text-p-accent",
          });

          // reset the form
          reset({
            projectName: project.projectName,
            appName: data.appName,
            appEmail: project.appEmail,
          });
        }
      }
      if (data.appEmail !== project.appEmail) {
        const response = await projectService.updateAppEmail(
          project._id,
          project.projectKey,
          data.appEmail
        );
        if (response.success) {
          // Update the project-store
          dispatch(
            storeUpdateProject({
              _id: project._id,
              appEmail: data.appEmail,
            })
          );

          // Send a toast notification
          useToast({
            message: "App Email updated successfully",
            delay: 0,
            icon: FaCircleCheck,
            iconStyle: "text-p-accent",
          });

          // reset the form
          reset({
            projectName: project.projectName,
            appName: project.appName,
            appEmail: data.appEmail,
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    return;
  };

  return (
    <section className="bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-35 gap-25 p-26 2xl:p-40 rounded-12 2xl:rounded-16">
      {isLoading ? (
        <Loader2 className="w-10 h-10 animate-spin" />
      ) : (
        <>
          {/* Setting title and input container */}
          <div className="w-full flex flex-row justify-between items-stretch gap-30 2xl:gap-40">
            {/* Title and Description */}
            <div className="w-1/2 flex flex-col justify-start items-start gap-0">
              <p className="text-20 2xl:text-24 font-medium">Details</p>
              <p className="text-12 2xl:text-18 text-white/50 mb-auto">
                You can change the App Name and Email here. App Name and Email
                are used in email-related services.
              </p>
              <NotificationLabel text="Please do not change the App Name/Email very frequently as it makes it difficult for us to keep records" />
            </div>
            {/* Input Components */}
            <div className="w-1/2 flex flex-col justify-start items-start gap-10">
              <Input
                disabled
                additionalStyle="text-14 2xl:text-18"
                widthStyle="w-full"
                name="projectName"
                register={register}
                registerOptions={{
                  required: "Project name is required",
                  minLength: {
                    value: 3,
                    message: "Project-Name must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Project-Name must be at most 30 characters long",
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z0-9-]*$/,
                    message:
                      "Project-Name must start with an alphabet and can only contain letters, numbers, and hyphens",
                  },
                }}
                label="Project name"
                labelStyle="text-14 2xl:text-18"
                type="text"
                icon={FiCopy}
                iconOnClick={() =>
                  navigator.clipboard.writeText(project.projectName)
                }
              />
              <Input
                additionalStyle="text-14 2xl:text-18"
                widthStyle="w-full"
                name="appName"
                register={register}
                registerOptions={{
                  required: "App name is required",
                  minLength: {
                    value: 3,
                    message: "App name must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "App name must be at most 30 characters long",
                  },
                  pattern: {
                    value: /^[a-zA-Z-]+(?:\s[a-zA-Z-]+)*[a-zA-Z-]+$/,
                    message:
                      "App name can only contain letters, hyphens, and single spaces between words, with no whitespace at the start or end. No numbers or special characters allowed.",
                  },
                }}
                error={errors.appName?.message}
                label="App Name"
                labelStyle="text-14 2xl:text-18"
                type="text"
                icon={FiCopy}
                iconOnClick={() =>
                  navigator.clipboard.writeText(project.appName)
                }
              />
              <Input
                additionalStyle="text-14 2xl:text-18"
                widthStyle="w-full"
                name="appEmail"
                register={register}
                registerOptions={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                error={errors.appEmail?.message}
                label="App Email"
                labelStyle="text-14 2xl:text-18"
                type="text"
                icon={FiCopy}
                iconOnClick={() =>
                  navigator.clipboard.writeText(project.appEmail)
                }
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full flex flex-row justify-end items-center gap-10">
            <ActionBtn
              type="submit"
              text="Update"
              onClick={handleSubmit(updateDetails)}
              className="px-20 py-10 2xl:px-35 2xl:py-16 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px] border-white text-white"
            />
          </div>
        </>
      )}
    </section>
  );
};

// LOGIN METHODS CARD
interface LoginMethodsCardProps {
  project: Project;
}
export const LoginMethodsCard = ({ project }: LoginMethodsCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    clearErrors,
    reset,
    handleSubmit,
    watch,
  } = useForm<{
    emailPassword: boolean;
    OTPonEmail: boolean;
    magicURLonEmail: boolean;
  }>({
    defaultValues: {
      emailPassword: project.config.loginMethods.emailPassword,
      OTPonEmail: project.config.loginMethods.OTPonEmail || false,
      magicURLonEmail: project.config.loginMethods.magicURLonEmail || false,
    },
  });

  const updateLoginMethods = async (data: {
    emailPassword: boolean;
    OTPonEmail: boolean;
    magicURLonEmail: boolean;
  }) => {
    try {
      clearErrors();
      setIsLoading(true);
      const response = await projectService.updateLoginMethods(
        project._id,
        project.projectKey,
        data
      );
      if (response.success) {
        // Update the project-store
        dispatch(
          storeUpdateProject({
            _id: project._id,
            config: { loginMethods: data },
          })
        );

        // Send a toast notification
        useToast({
          message: "Login Methods updated successfully",
          delay: 0,
          icon: FaKey,
          iconStyle: "text-p-accent",
        });

        // reset the form to new values
        reset({
          emailPassword: data.emailPassword,
          OTPonEmail: data.OTPonEmail,
          magicURLonEmail: data.magicURLonEmail,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-35 gap-25 p-26 2xl:p-40 rounded-12 2xl:rounded-16">
      {isLoading ? (
        <Loader2 className="w-10 h-10 animate-spin" />
      ) : (
        <>
          {/* Setting title and input container */}
          <div className="w-full flex flex-row justify-between items-stretch gap-30 2xl:gap-40">
            {/* Title and Description */}
            <div className="w-1/2 flex flex-col justify-start items-start gap-0">
              <p className="text-20 2xl:text-24 font-medium">Login Methods</p>
              <p className="text-12 2xl:text-18 text-white/50 mb-auto">
                Choose from the various authentication methods you want to add
                to your project.
              </p>
            </div>
            {/* Toggle-switch container */}
            <div className="w-1/2 flex flex-col justify-start items-start gap-10 2xl:gap-16">
              {/* Toggle-switch: Email and Password */}
              <ToggleSwitch
                disabled
                register={register}
                name="emailPassword"
                label="Email and Password"
              />

              {/* Toggle-switch: OTP on Email */}
              <ToggleSwitch
                register={register}
                name="OTPonEmail"
                label="OTP on Email"
              />

              {/* Toggle-switch: Magic URL on Email */}
              <ToggleSwitch
                register={register}
                name="magicURLonEmail"
                label="Magic URL on Email"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full flex flex-row justify-end items-center gap-10">
            <ActionBtn
              type="submit"
              text="Update"
              onClick={handleSubmit(updateLoginMethods)}
              className="px-20 py-10 2xl:px-35 2xl:py-16 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px] border-white text-white"
            />
          </div>
        </>
      )}
    </section>
  );
};

// DELETE PROJECT CARD
interface DeleteProjectCardProps {
  project: Project;
}
export const DeleteProjectCard = ({ project }: DeleteProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const projectId = project._id;

  const deleteProject = async () => {
    try {
      setIsLoading(true);
      const response = await projectService.deleteProject(projectId);
      if (response.success) {
        // redirect to projects page
        router.push("/console");

        // delete the project from the project-store
        /* 
          Since the other components are using the resux-store data to render the content, deleting it first will cause the app to crash. So, first navigate out of this project-page and then delete the project from the store.
          
          Also, simply putting the dispatch call after the navigation call will not work as the navigation call takes some time to complete. So, we use a setTimeout to delay the dispatch call.
        */
        setTimeout(() => {
          dispatch(storeDeleteProject(projectId));
        }, 300);

        // Send a toast notification
        useToast({
          message: "Project deleted successfully",
          delay: 300,
          icon: FaTrash,
          iconStyle: "text-p-accent",
        });
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <AccountSettingDangerCard
      title="Delete Project"
      description="This action will remove all of your project data and all users enrolled in the project. This action cannot be reversed."
      buttonText="DELETE PROJECT"
      buttonClick={deleteProject}
    />
  );
};

/* --------------- PROJECT SETTING EMAIL-TEMPLATE CARDS --------------- */

interface EmailTemplateCardProps {
  project: Project;
  emailTemplate: {
    subject: string;
    emailMessage: string;
  };
}
export const EmailTemplateCard = ({
  project,
  emailTemplate,
}: EmailTemplateCardProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<{
    senderName: string;
    senderEmail: string;
    subject: string;
    emailMessage: string;
  }>({
    defaultValues: {
      senderName: project.appName,
      senderEmail: project.appEmail,
      subject: emailTemplate.subject,
      emailMessage: emailTemplate.emailMessage,
    },
  });

  return (
    <section className="bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-30 gap-20 p-26 2xl:p-40 rounded-12 2xl:rounded-16">
      {/* Setting title and input container */}
      <div className="w-full flex flex-row justify-between items-stretch gap-30 2xl:gap-40">
        {/* Title and Description */}
        <div className="w-2/5 flex flex-col justify-start items-start gap-0">
          <p className="text-20 2xl:text-24 font-medium">User Verification</p>
          <p className="text-12 2xl:text-18 text-white/50 mb-auto">
            Send a verification email to the users signing in using email and
            password.
          </p>
        </div>

        {/* Input Components */}
        <div className="w-3/5 flex flex-col justify-start items-start gap-10">
          <Input
            name="senderName"
            placeholder="Enter sender name"
            additionalStyle="text-14 2xl:text-18"
            widthStyle="w-full"
            register={register}
            label="Sender Name"
            labelStyle="text-14 2xl:text-18"
            type="text"
            registerOptions={{
              required: "Sender name is required",
              minLength: {
                value: 3,
                message: "Sender name must be at least 3 characters long",
              },
              maxLength: {
                value: 30,
                message: "Sender name must be at most 30 characters long",
              },
            }}
            error={errors.senderName?.message}
          />
          <Input
            name="senderEmail"
            additionalStyle="text-14 2xl:text-18"
            widthStyle="w-full"
            register={register}
            label="Sender Email"
            labelStyle="text-14 2xl:text-18"
            type="text"
            registerOptions={{
              required: "Sender email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            error={errors.senderEmail?.message}
          />
          <Input
            name="subject"
            additionalStyle="text-14 2xl:text-18"
            widthStyle="w-full"
            register={register}
            label="Subject"
            labelStyle="text-14 2xl:text-18"
            type="text"
            registerOptions={{
              required: "Subject is required",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters long",
              },
              maxLength: {
                value: 30,
                message: "Subject must be at most 30 characters long",
              },
            }}
            error={errors.subject?.message}
          />
          <Textarea
            name="emailMessage"
            placeholder="Enter email message"
            additionalStyle="text-14 2xl:text-18"
            widthStyle="w-full"
            register={register}
            label="Email Message"
            labelStyle="text-14 2xl:text-18"
            registerOptions={{
              required: "Email message is required",
              minLength: {
                value: 100,
                message: "Email message must be at least 100 characters long",
              },
              maxLength: {
                value: 1000,
                message: "Email message must be at most 1000 characters long",
              },
            }}
            error={errors.emailMessage?.message}
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full flex flex-row justify-between items-end gap-10">
        <p
          onClick={handleSubmit(() => {})}
          className="text-12 2xl:text-16 text-white underline cursor-pointer"
        >
          Reset to default
        </p>
        <ActionBtn
          type="submit"
          text="Update"
          onClick={handleSubmit(() => {})}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px] border-white text-white"
        />
      </div>
    </section>
  );
};
