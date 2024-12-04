import { projectService } from "@/services/project.service";
import { useState } from "react";

export const useGetUsers = (projectId: string, projectKey: string) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemLimit, setItemLimit] = useState(5);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await projectService.getUsers(projectId, projectKey, {
        page: Number(currentPage),
        itemLimit: Number(itemLimit),
      });
      if (response.success) {
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

  const searchUsers = async (searchInput: string) => {
    if (searchInput.trim() === "") {
      getUsers();
      return;
    }
    try {
      setLoading(true);
      const response = await projectService.searchUsers(
        projectId,
        projectKey,
        searchInput.trim(),
        {
          page: Number(currentPage),
          itemLimit: Number(itemLimit),
        }
      );
      if (response.success) {
        setUsers(response.data.users);
        setItemLimit(response.data.pagination.itemLimit);
        // setCurrentPage(response.data.pagination.currentPage);
        setHasNextPage(response.data.pagination.hasNextPage);
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
    searchQuery,
    setSearchQuery,
    searchUsers,
  };
};
