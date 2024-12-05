"use client";

import { projectService } from "@/services/project.service";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FiCopy } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdBlock } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { useSelector } from "react-redux";

export default function UsersTable({
  users,
  setUsers,
}: {
  users: any[];
  setUsers: (newUsers: any[]) => void;
}) {
  const params = useParams();
  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  const deleteUser = async (userId: string) => {
    try {
      const response = await projectService.deleteUser(
        project?._id as string,
        project?.projectKey as string,
        userId
      );
      if (response.success) {
        console.log(response); // debugging
        // Send success toast notification

        // Update the users state
        setUsers(users.filter((user) => user._id !== userId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ADD THIS FEATURE IN THE FUTURE
  const blockUser = async (userId: string) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const verifyUser = async (userId: string, email: string) => {
    try {
      const response = await projectService.verifyUser(
        project?._id as string,
        project?.projectKey as string,
        userId,
        email
      );
      if (response.success) {
        console.log(response); // debugging
        // Send success toast notification

        // Update the users state
        setUsers(
          users.map((user) =>
            user._id === userId ? { ...user, isVerified: true } : user
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (users.length === 0) {
    return (
      <div className="w-full h-full grow flex-center text-white text-14 2xl:text-18">
        <p>No entries found</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-8 2xl:rounded-10 bg-bg-2 px-18 2xl:px-26 py-12 2xl:py-22">
      <div className="w-full">
        <div className="flex flex-col">
          {/* Table Header */}
          <div className="flex flex-row justify-start items-center gap-10 2xl:gap-20 text-14 2xl:text-18 uppercase font-semibold border-b border-bg-3">
            <div className="flex-shrink-0 w-[100px] 2xl:w-[130px] py-12 2xl:py-16">
              User-ID
            </div>
            <div className="flex-shrink-0 w-[150px] 2xl:w-[160px] py-12 2xl:py-16">
              Username
            </div>
            <div className="flex-shrink-0 w-[150px] 2xl:w-[160px] py-12 2xl:py-16">
              Email
            </div>
            <div className="w-[100px] 2xl:w-[120px] py-12 2xl:py-16">
              Status
            </div>
            <div className="flex-grow py-12 2xl:py-16">Joined</div>
            <div className="flex-grow flex flex-row justify-end items-center py-12 2xl:py-16">
              Actions
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col text-14 2xl:text-16 divide-y divide-bg-3">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex flex-row justify-start items-center gap-10 2xl:gap-20"
              >
                {/* User-ID */}
                <div className="flex-shrink-0 w-[100px] 2xl:w-[130px] py-12 2xl:py-16 group relative">
                  <div
                    className="flex-center w-fit gap-10 p-8 2xl:px-14 2xl:py-8  rounded-full bg-bg-3/20 hover:scale-105 transition-transform duration-100 cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(user._id);
                    }}
                  >
                    <span className="font-medium text-12 2xl:text-14 text-overflow-ellipsis">
                      User-ID
                    </span>
                    <div className="group relative">
                      <FiCopy className="cursor-pointer text-white/50 hover:text-white transition-colors duration-100 h-[14px] w-[14px] 2xl:h-[20px] 2xl:w-[20px]" />
                    </div>
                  </div>
                  <span className="absolute w-[100px] left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Copy User-ID
                  </span>
                </div>
                {/* Username */}
                <div className="flex-shrink-0 w-[150px] 2xl:w-[160px] py-12 2xl:py-16 text-content-2">
                  {user.username}
                </div>
                {/* Email */}
                <div className="flex-shrink-0 w-[150px] 2xl:w-[160px] py-12 2xl:py-16 text-content-2">
                  {user.email}
                </div>
                {/* Verification Status */}
                <div className="w-[100px] 2xl:w-[120px] py-12 2xl:py-16 group relative">
                  <div
                    className={`w-fit text-12 2xl:text-16 px-10 py-8 2xl:px-14 2xl:py-8 rounded-full ${
                      user.isVerified
                        ? "bg-success/10 text-success font-semibold"
                        : "bg-bg-3/30 hover:bg-bg-3/50 cursor-pointer"
                    }`}
                    onClick={() => {
                      if (!user.isVerified) {
                        verifyUser(user._id, user.email);
                      }
                    }}
                  >
                    {user.isVerified ? "verified" : "unverified"}
                  </div>
                  <span className="w-1/2 absolute left-1/2 -translate-x-2/3 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {user.isVerified ? null : "verify"}
                  </span>
                </div>
                {/* Joined Date */}
                <div className="flex-grow py-12 2xl:py-16 text-content-2">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex-grow flex flex-row justify-end items-center gap-14 2xl:gap-22 py-12 2xl:py-16">
                  {/* Details */}
                  <Link
                    href={`/console/project/${
                      params.id as string
                    }/user/${user._id}/overview`}
                  >
                    <div className="group relative">
                      <PiDotsThreeBold className="text-white font-bold transition-colors duration-100 h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] cursor-pointer" />
                      <span className="absolute left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Details
                      </span>
                    </div>
                  </Link>

                  {/* BLOCK USER: ADD THIS FEATURE IN THE FUTURE */}
                  <div className="group relative">
                    <MdBlock className="text-warning transition-colors duration-100 h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] cursor-pointer" />
                    <span className="absolute left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Coming Soon...
                    </span>
                  </div>

                  {/* Delete */}
                  <div className="group relative">
                    <HiOutlineTrash
                      onClick={() => deleteUser(user._id)}
                      className="text-danger-1 font-bold transition-colors duration-100 h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] cursor-pointer"
                    />
                    <span className="absolute left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
