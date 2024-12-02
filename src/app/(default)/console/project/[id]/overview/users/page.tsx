"use client";

import ActionBtn from "@/components/buttons/action-btn";
import Searchbar from "@/components/searchbar";
import UserTable from "@/components/tables/user-table";
import { projectService } from "@/services/project.service";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const params = useParams();
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<{
    searchInput: string;
  }>({
    defaultValues: {
      searchInput: "",
    },
  });

  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  const searchUser = (data: { searchInput: string }) => {
    console.log(data);
  };

  const getUsers = async () => {
    try {
      const response = await projectService.getUsers(
        params.id as string,
        project?.projectKey as string,
        {
          page: 1,
          itemLimit: 10,
        }
      );
      if (response.success) {
        console.log(response); // debugging
        setUsers(response.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
      {/* Search */}
      <div className="w-full flex flex-row justify-start items-stretch gap-10 2xl:gap-20">
        <Searchbar
          name="searchInput"
          register={register}
          placeholder="Search by User-ID or user name"
        />
        <ActionBtn
          type="submit"
          text="Search"
          onClick={handleSubmit(searchUser)}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 bg-bg-3 rounded-6 hover:bg-bg-2 transition-all duration-150 text-white"
        />
      </div>
      {/* Users Display */}
      <div className="min-h-[300px] rounded-8 2xl:rounded-10  bg-bg-2 w-full flex flex-col justify-start items-start gap-20">
        <UserTable users={users} />
      </div>
    </section>
  );
};

export default UsersPage;
