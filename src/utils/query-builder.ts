export class QueryBuilder {
  public static paginationAndDateFilters = (filters: {
    page?: number;
    itemLimit?: number;
    startDate?: string;
    endDate?: string;
  }) => {
    let queryString = "";

    if (filters) {
      const queryParams = [];
      if (filters.page) {
        queryParams.push(`page=${filters.page}`);
      }
      if (filters.itemLimit) {
        queryParams.push(`itemLimit=${filters.itemLimit}`);
      }
      if (filters.startDate) {
        queryParams.push(`startDate=${filters.startDate}`);
      }
      if (filters.endDate) {
        queryParams.push(`endDate=${filters.endDate}`);
      }
      if (queryParams.length > 0) {
        queryString = `${queryParams.join("&")}`;
      }
    }

    return queryString;
  };
}
