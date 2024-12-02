export class QueryBuilder {
  public static paginationQuery = (query: {
    page?: number;
    itemLimit?: number;
    startDate?: string;
    endDate?: string;
  }) => {
    let queryString = "";

    if (query) {
      const queryParams = [];
      if (query.page) {
        queryParams.push(`page=${query.page}`);
      }
      if (query.itemLimit) {
        queryParams.push(`itemLimit=${query.itemLimit}`);
      }
      if (query.startDate) {
        queryParams.push(`startDate=${query.startDate}`);
      }
      if (query.endDate) {
        queryParams.push(`endDate=${query.endDate}`);
      }
      if (queryParams.length > 0) {
        queryString = `${queryParams.join("&")}`;
      }
    }

    return queryString;
  };
}
