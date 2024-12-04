import Link from "next/link";
import { FiCopy } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdBlock } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";

export default function UsersTable({ users }: { users: any[] }) {
  // TODO: Add user-actions

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
                <div className="flex-shrink-0 w-[150px] 2xl:w-[160px] py-12 2xl:py-16 text-content-2">
                  {user.username}
                </div>
                <div className="flex-shrink-0 w-[150px] 2xl:w-[160px] py-12 2xl:py-16 text-content-2">
                  {user.email}
                </div>
                <div className="w-[100px] 2xl:w-[120px] py-12 2xl:py-16">
                  <p
                    className={`w-fit text-12 2xl:text-16  p-8 2xl:px-12 2xl:py-8 rounded-full ${
                      user.isVerified
                        ? "bg-success/10 text-success font-semibold"
                        : "bg-bg-3/30"
                    }`}
                  >
                    {user.isVerified ? "verified" : "unverified"}
                  </p>
                </div>
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
                    href={`/console/project/${user.projectId}/user?id=${user._id}`}
                  >
                    <div className="group relative">
                      <PiDotsThreeBold className="text-white font-bold transition-colors duration-100 h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] cursor-pointer" />
                      <span className="absolute left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Details
                      </span>
                    </div>
                  </Link>

                  {/* Block */}
                  <div className="group relative">
                    <MdBlock className="text-warning transition-colors duration-100 h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] cursor-pointer" />
                    <span className="absolute left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Block
                    </span>
                  </div>

                  {/* Delete */}
                  <div className="group relative">
                    <HiOutlineTrash className="text-danger-1 font-bold transition-colors duration-100 h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] cursor-pointer" />
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
