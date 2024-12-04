import { projectService } from "@/services/project.service";
import { useState } from "react";

export const useBlockUser = () => {};

export const useDeleteUser = () => {};

export const useVerifyUser = () => {};

export const useGetUsers = (projectId: string, projectKey: string) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemLimit, setItemLimit] = useState(5);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
    //   console.log("Current Page: ", currentPage); // debugging
    //   console.log("Item Limit: ", itemLimit); // debugging

      const response = await projectService.getUsers(projectId, projectKey, {
        page: Number(currentPage),
        itemLimit: Number(itemLimit),
      });
      if (response.success) {
        // console.log(response); // debugging
        setUsers(response.data.users);
        setHasNextPage(response.data.pagination.hasNextPage);
        // setCurrentPage(response.data.pagination.currentPage);
        setHasPreviousPage(response.data.pagination.hasPreviousPage);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    users,
    setUsers,
    getUsers,
    currentPage,
    setCurrentPage,
    itemLimit,
    setItemLimit,
    hasNextPage,
    setHasNextPage,
    hasPreviousPage,
    setHasPreviousPage,
  };
};
