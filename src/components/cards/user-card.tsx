import { useToast } from "@/utils/toast-notification";
import ActionBtn from "../buttons/action-btn";
import {
  AccountSettingCard,
  AccountSettingDangerCard,
} from "./account-setting-card";
import { UseFormRegister } from "react-hook-form";
import { MdOutlinePendingActions } from "react-icons/md";

interface IUserFormData {
  name: string;
  email: string;
}

interface UserCardProps {
  register: UseFormRegister<Partial<IUserFormData>>;
  user: any;
  verifyUser: () => void;
  onNameSubmit: () => void;
  onEmailSubmit: () => void;
  onDeleteUser: () => void;
  onPromoteUser: () => void;
}

export const UserDetailsCard = ({
  user,
  verifyUser,
}: Pick<UserCardProps, "user" | "verifyUser">) => {
  return (
    <section
      className={`bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-30 gap-20 p-26 2xl:p-40 rounded-12 2xl:rounded-16`}
    >
      {/* Setting title and input container */}
      <div className="w-full flex flex-row justify-between items-start gap-30 2xl:gap-40">
        {/* User-name and verification status */}
        <div className="w-2/5 flex flex-col justify-start items-start gap-10 2xl:gap-20">
          <div className="flex flex-row justify-start items-start gap-10 2xl:gap-20">
            {/* User-icon */}
            <div className="flex-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] bg-s-accent rounded-6 2xl:rounded-14 mr-1">
              <p className="text-18 2xl:text-24 font-medium text-white">
                {user.username.charAt(0).toUpperCase()}
              </p>
            </div>
            {/* User-name */}
            <p className="text-20 2xl:text-24 font-medium">{user.username}</p>
          </div>
        </div>

        {/* User-details */}
        <div className="w-2/5 flex flex-col justify-start items-start gap-10">
          <div className="flex flex-row justify-start items-center gap-10">
            <p className="text-14 2xl:text-18 text-white">Email:</p>
            <p className="text-14 2xl:text-18 text-white/50">{user.email}</p>
          </div>
          <div className="flex flex-row justify-start items-center gap-10">
            <p className="text-14 2xl:text-18 text-white">Joined on:</p>
            <p className="text-14 2xl:text-18 text-white/50">
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Verification status */}
        <div className="w-1/5 flex flex-col justify-start items-end gap-10">
          <div
            className={`flex-center w-fit px-16 py-6 2xl:px-20 2xl:py-8 bg-bg-3 rounded-full font-bold ${
              user.isVerified
                ? "text-success bg-success/10"
                : "text-white/50 bg-bg-3/50"
            }`}
          >
            <p className="text-12 2xl:text-18">
              {user.isVerified ? "verified" : "unverified"}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-row justify-end items-center gap-10">
        <ActionBtn
          text={"Block"}
          onClick={() => {
            // Send a toast notification
            useToast({
              message: "Feature coming soon",
              delay: 0,
              icon: MdOutlinePendingActions,
              iconStyle: "text-p-accent",
            });
          }}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 text-white font-medium"
        />
        <ActionBtn
          text={"Verify"}
          onClick={verifyUser}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px]  border-white text-white"
        />
      </div>
    </section>
  );
};

export const DeleteUserCard = ({
  onDeleteUser,
}: Pick<UserCardProps, "onDeleteUser">) => {
  return (
    <AccountSettingDangerCard
      title="Delete User"
      description="This user account and related data will be permanently deleted. This action cannot be reversed."
      buttonText="DELETE USER"
      buttonClick={onDeleteUser}
    />
  );
};

export const PromoteUserCard = () => {
  return (
    <AccountSettingDangerCard
      title="Promote to Admin"
      description="This user will be promoted to admin with full access to this developer console. Please ensure that you trust the user before promoting them."
      buttonText="PROMOTE TO ADMIN"
      buttonClick={() => {
        // send toast notification of "COMING SOON"
      }}
    />
  );
};
