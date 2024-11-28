// Class to persist the redux-store in the session storage
/*
    WORKFLOW:

    1. Upon the first website load, fetch the data from the API and store it in the session storage as well as the redux-store.

    2. Check if data is already present in the session storage. If it is, then set the redux-store to the value present in the session storage. Else, make an API call to fetch the data and update the session storage.

    3. Whenever the redux-store is updated, update the session storage.

    4. Whenever the page is refreshed or the URL-route changes, retrieve the redux-store from the session storage without making a separate API call.
*/
export default class Persist {
  public static auth = {
    set: (auth: any) => {
      sessionStorage.setItem("auth", JSON.stringify(auth));
    },
    get: () => {
      return JSON.parse(sessionStorage.getItem("auth") || "null");
    },
    remove: () => {
      sessionStorage.removeItem("auth");
    },
  };

  public static projects = {
    set: (projects: any) => {
      sessionStorage.setItem("projects", JSON.stringify(projects));
    },
    get: () => {
      return JSON.parse(sessionStorage.getItem("projects") || "null");
    },
    clear: () => {
      sessionStorage.removeItem("projects");
    },
    remove: (projectId: string) => {
      const projects = Persist.projects.get();
      const newProjects = projects.filter(
        (project: any) => project.id !== projectId
      );
      Persist.projects.set(newProjects);
    },
  };
}
