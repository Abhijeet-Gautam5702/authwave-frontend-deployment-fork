"use client";

import { AccountSettingCard } from "@/components/cards/account-setting-card";
import PageTitle from "@/components/page-title";
import Protected from "@/components/protected";
import { adminAuthService } from "@/services/admin-auth.service";
import { storeLogout, storeUpdateAdminInfo } from "@/store/auth/auth.slice";
import { RootState } from "@/store/store";
import { Loader, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export interface IAccountFormData {
  name: string;
  email: string;
  password: string;
}

const AccountPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const admin = useSelector((state: RootState) => state.auth.admin);
  const { register, handleSubmit, reset } = useForm<Partial<IAccountFormData>>({
    defaultValues: {
      name: admin?.name,
      email: admin?.email,
      password: "********",
    },
  });

  const [loading, setLoading] = useState(false);

  /* --------- Form Submit Handlers --------- */
  const submitName = async (data: Partial<IAccountFormData>) => {
    try {
      setLoading(true);
      const response = await adminAuthService.updateAdminData({
        name: data.name,
      });
      if (response.success) {
        // Update the admin info in the store
        dispatch(storeUpdateAdminInfo(response.data));
        // Show success toast

        // reset the form to the new values
        reset((formValues) => ({
          ...formValues,
          name: response.data.name,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitEmail = async (data: Partial<IAccountFormData>) => {
    try {
      setLoading(true);
      const response = await adminAuthService.updateAdminData({
        email: data.email,
      });
      if (response.success) {
        // Update the admin info in the store
        dispatch(storeUpdateAdminInfo(response.data));
        // Show success toast

        // reset the form to the new values
        reset((formValues) => ({
          ...formValues,
          email: response.data.email,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitPassword = async (data: Partial<IAccountFormData>) => {
    try {
      setLoading(true);
      const response = await adminAuthService.updateAdminData({
        password: data.password,
      });
      if (response.success) {
        // Show success toast

        // reset the form to the new values
        reset((formValues) => ({
          ...formValues,
          password: response.data.password,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /* --------- Admin Logout Function --------- */
  const adminLogout = async () => {
    try {
      setLoading(true);
      const response = await adminAuthService.logout();
      if (response.success) {
        dispatch(storeLogout());
        router.replace("/"); // Redirect to the homepage
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader2 className="w-10 h-10 animate-spin" />;
  }

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
        buttonClassName="rounded-4 2xl:rounded-6 text-12 2xl:text-16 px-16 2xl:px-24 py-8 2xl:py-12"
        buttonClick={adminLogout}
      />
      {/* Account Settings */}
      <div className="w-full min-h-full flex flex-col justify-start items-center 2xl:gap-40 gap-20 2xl:px-200 px-140 2xl:py-60 py-30">
        <AccountSettingCard
          title="Name"
          description="Do not change your name frequently"
          buttonText="Update"
          buttonClick={handleSubmit(submitName)}
          inputPlaceholder="Enter your name"
          register={register}
          inputName="name"
        />
        <AccountSettingCard
          title="Email"
          description="Do not change your email frequently"
          buttonText="Update"
          buttonClick={handleSubmit(submitEmail)}
          inputPlaceholder="Enter your email"
          register={register}
          inputName="email"
        />
        <AccountSettingCard
          title="Password"
          description="Change your password frequently to keep your account secure"
          buttonText="Update"
          buttonClick={handleSubmit(submitPassword)}
          inputPlaceholder="Enter your new password"
          register={register}
          inputName="password"
          inputType="password"
        />
      </div>
    </div>
  );
};

export default Protected(AccountPage);
