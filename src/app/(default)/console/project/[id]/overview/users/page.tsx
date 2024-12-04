"use client";

import ActionBtn from "@/components/buttons/action-btn";
import Searchbar from "@/components/searchbar";
import UserTable from "@/components/tables/user-table";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { SectionLoader } from "@/components/loaders/section-loader";
import { useGetUsers } from "@/hooks/user-action.hook";

const UsersPage = () => {
  const params = useParams();
  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  // User Hooks
  const {
    loading,
    users,
    getUsers,
    currentPage,
    itemLimit,
    hasNextPage,
    hasPreviousPage,
    setCurrentPage,
    setItemLimit,
    searchQuery,
    setSearchQuery,
    searchUsers,
  } = useGetUsers(project?._id as string, project?.projectKey as string);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      getUsers();
    } else {
      searchUsers(searchQuery);
    }
  }, [currentPage, itemLimit]);

  if (loading) {
    return <SectionLoader />;
  }
  return (
    <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
      {/* Search */}
      <div className="w-full flex flex-row justify-start items-stretch gap-10 2xl:gap-20">
        <Searchbar
          name="searchInput"
          value={searchQuery}
          setSearchQuery={setSearchQuery}
          // register={register}
          placeholder="Search by User-ID or user name"
          actionIconClick={() => {
            getUsers();
            setSearchQuery("");
          }}
        />
        <ActionBtn
          type="submit"
          text="Search"
          onClick={() => searchUsers(searchQuery.trim())}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 bg-bg-3 rounded-6 hover:bg-bg-2 transition-all duration-150 text-white"
        />
      </div>
      {/* Users Display */}
      <div className="min-h-[300px] rounded-8 2xl:rounded-10  bg-bg-2 w-full flex flex-col justify-start items-start gap-20">
        <UserTable users={users} />
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        {/* Pagination */}
        <div className="flex flex-row justify-start items-center gap-10 text-12 2xl:text-16">
          <select
            value={itemLimit}
            onChange={(e) => {
              setItemLimit(Number(e.target.value));
              setCurrentPage(1);
              setSearchQuery("");
            }}
            className="w-[50px] 2xl:w-[70px] rounded-6 2xl:rounded-8 px-10 py-8 2xl:px-14 2xl:py-12 bg-bg-2 appearance-none focus:outline-none focus:ring-0 focus:border-none focus:ring-offset-0 text-center"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
          <span className="">users per page</span>
        </div>
        {/* Next and previous page buttons */}
        <div className="flex flex-row justify-end items-center gap-10 2xl:gap-14 text-12 2xl:text-16">
          <button
            disabled={!hasPreviousPage}
            className={`px-10 py-8 2xl:px-20 2xl:py-14 bg-bg-2 rounded-6 2xl:rounded-8 transition-all duration-150 ${
              hasPreviousPage
                ? "text-white hover:bg-bg-3"
                : "text-white/30 cursor-not-allowed"
            }`}
            onClick={() =>
              setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)
            }
          >
            <FaArrowLeft />
          </button>
          <button
            disabled={!hasNextPage}
            className={`px-10 py-8 2xl:px-20 2xl:py-14 bg-bg-2 rounded-6 2xl:rounded-8 transition-all duration-150 ${
              hasNextPage
                ? "text-white hover:bg-bg-3"
                : "text-white/30 cursor-not-allowed"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
