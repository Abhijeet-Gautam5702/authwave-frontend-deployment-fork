"use client";

import {
  AccountSettingCard,
  AccountSettingDangerCard,
} from "@/components/cards/account-setting-card";
import PageTitle from "@/components/page-title";
import Protected from "@/components/protected";
import { adminAuthService } from "@/services/admin-auth.service";
import { projectService } from "@/services/project.service";
import { storeLogout, storeUpdateAdminInfo } from "@/store/auth/auth.slice";
import { storeResetProjects } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useUniversalLoader from "@/components/loaders/universal-loader";
import { useToast } from "@/utils/toast-notification";
import { FaUserCheck } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiFileShredFill } from "react-icons/ri";

export interface IAccountFormData {
  name: string;
  email: string;
  password: string;
}

const AccountPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const admin = useSelector((state: RootState) => state.auth.admin);
  const { register, handleSubmit, reset, trigger, getValues } =
    useForm<IAccountFormData>({
      defaultValues: {
        name: admin?.name,
        email: admin?.email,
        password: "***********",
      },
    });

  // const [loading, setLoading] = useState(false);
  const { startLoading, stopLoading } = useUniversalLoader();

  /* --------- Form Submit Handlers --------- */
  const submitName = async (data: IAccountFormData) => {
    console.log("submitName", data);
    try {
      // setLoading(true);
      startLoading();
      const response = await adminAuthService.updateAdminData({
        name: data.name,
      });
      if (response.success) {
        // Update the admin info in the store
        dispatch(storeUpdateAdminInfo(response.data));

        // reset the form to the new values
        reset((formValues) => ({
          ...formValues,
          name: response.data.name,
        }));

        // Send a toast notification
        useToast({
          message: "Admin Name updated successfully",
          delay: 0,
          icon: FaUserCheck,
          iconStyle: "text-p-accent",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      stopLoading();
    }
  };

  const submitEmail = async (data: IAccountFormData) => {
    console.log("submitEmail", data);
    try {
      // setLoading(true);
      startLoading();
      const response = await adminAuthService.updateAdminData({
        email: data.email,
      });
      if (response.success) {
        // console.log(response);
        // Update the admin info in the store
        dispatch(storeUpdateAdminInfo(response.data));

        // reset the form to the new values
        reset((formValues) => ({
          ...formValues,
          email: response.data.email,
        }));

        // Send a toast notification
        useToast({
          message: "Admin Email updated successfully",
          delay: 0,
          icon: FaUserCheck,
          iconStyle: "text-p-accent",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      stopLoading();
    }
  };

  const submitPassword = async (data: IAccountFormData) => {
    console.log("submitPassword", data);
    try {
      // setLoading(true);
      startLoading();
      const response = await adminAuthService.updateAdminData({
        password: data.password,
      });
      if (response.success) {
        // reset the form to the new values
        reset((formValues) => ({
          ...formValues,
          password: response.data.password,
        }));

        // Send a toast notification
        useToast({
          message: "Admin Password updated successfully",
          delay: 0,
          icon: FaUserCheck,
          iconStyle: "text-p-accent",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      stopLoading();
    }
  };

  /* --------- Danger Zone Functions --------- */

  const deleteAccount = async () => {
    try {
      // setLoading(true);
      startLoading();
      const response = await adminAuthService.deleteAccount();
      if (response.success) {
        // Show success toast

        // Logout the admin
        dispatch(storeLogout());
        // Redirect to the homepage
        router.replace("/");

        // Send a toast notification
        useToast({
          message: "Admin Account deleted",
          delay: 300,
          icon: RiFileShredFill,
          iconStyle: "text-p-accent",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      stopLoading();
    }
  };

  const deleteAllProjects = async () => {
    try {
      // setLoading(true);
      startLoading();
      const response = await projectService.deleteAllProjects();
      if (response.success) {
        // Show success toast

        // Reset the projects in the store
        dispatch(storeResetProjects());

        // Send a toast notification
        useToast({
          message: "All projects within this account have been deleted",
          delay: 0,
          icon: RiFileShredFill,
          iconStyle: "text-p-accent",
        });

        // console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      stopLoading();
    }
  };

  /* --------- Admin Logout Function --------- */
  const adminLogout = async () => {
    try {
      // setLoading(true);
      startLoading();
      const response = await adminAuthService.logout();
      if (response.success) {
        dispatch(storeLogout());
        router.replace("/"); // Redirect to the homepage
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      stopLoading();
    }
  };

  return (
    <div className="w-full grow  flex flex-col justify-start items-center gap-0 p-0">
      {/* Page Title */}
      <PageTitle
        outerClassName="bg-bg-2 2xl:px-200 px-140 2xl:py-80 py-40"
        title={admin?.name!}
        titleClassName="page-title"
        label="Admin"
        labelClassName="text-12 2xl:text-18 font-medium"
        buttonText="LOGOUT"
        buttonClassName="rounded-4 2xl:rounded-6 text-12 2xl:text-16 px-16 2xl:px-24 py-10 2xl:py-14 border-[0.5px] border-white text-white"
        buttonClick={adminLogout}
      />
      {/* Account Settings */}
      <div className="w-full min-h-full flex flex-col justify-start items-center gap-40 2xl:px-200 px-140 2xl:py-60 py-30">
        <section className="w-full flex flex-col justify-start items-start  2xl:gap-40 gap-20">
          <AccountSettingCard
            title="Name"
            description="Do not change your name frequently"
            buttonText="Update"
            /*
              NOTE:
              By default, the formhandler will check and validate all the form fields before submitting the form. 

              To prevent this, we are using the trigger function to check and validate the specific form field before submitting the form.

              - trigger("name") will trigger the validation for the name field
              - getValues() will get the current values of all the form fields
              - submitName(getValues()) will submit the form with the current values
            */
            buttonClick={() => {
              trigger("name").then((isValid) => {
                if (isValid) {
                  submitName(getValues());
                }
              });
            }}
            inputPlaceholder="Enter your name"
            register={register}
            registerOptions={{
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
              maxLength: {
                value: 30,
                message: "Name must be at most 30 characters long",
              },
              pattern: {
                value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                message:
                  "Name can only contain letters and single spaces between words. No numbers or special characters allowed.",
              },
            }}
            inputName="name"
            inputType="text"
          />
          <AccountSettingCard
            title="Email"
            description="Do not change your email frequently"
            buttonText="Update"
            buttonClick={() => {
              trigger("email").then((isValid) => {
                if (isValid) {
                  submitEmail(getValues());
                }
              });
            }}
            inputPlaceholder="Enter your email"
            register={register}
            registerOptions={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            inputName="email"
            inputType="email"
          />
          <AccountSettingCard
            title="Password"
            description="Change your password frequently to keep your account secure"
            buttonText="Update"
            buttonClick={() => {
              trigger("password").then((isValid) => {
                if (isValid) {
                  submitPassword(getValues());
                }
              });
            }}
            inputPlaceholder="Enter your new password"
            register={register}
            registerOptions={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
                message:
                  "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)",
              },
            }}
            inputName="password"
            inputType="password"
          />
        </section>

        {/* Danger Zone */}
        <section className="w-full flex flex-col justify-start items-start 2xl:gap-30 gap-20">
          <p className="text-18 2xl:text-24 w-full rounded-6 2xl:rounded-10 bg-danger-2/15 text-danger-2 font-medium p-12 2xl:p-20 text-center">
            DANGER ZONE
          </p>
          {/* Delete All Projects Card */}
          <AccountSettingDangerCard
            title="Delete All Projects"
            description="All projects under this Auth Wave account will be deleted permanently"
            buttonText="DELETE ALL PROJECTS"
            buttonClick={deleteAllProjects}
          />
          {/* Delete Account Card */}
          <AccountSettingDangerCard
            title="Delete Account"
            description="Your Auth Wave account and all the projects will be deleted permanently"
            buttonText="DELETE ACCOUNT"
            buttonClick={deleteAccount}
          />
        </section>
      </div>
    </div>
  );
};

export default Protected(AccountPage);
