"use client";

import Protected from "@/components/protected";
import React from "react";

/*
    PARAMS AS PROMISES
    In Next-JS, all the params (route params and query params) are now a promise and we must use React.use() to resolve them.

    This allows Next-JS to start rendering the HTML even before the params data is resolved, improving the performance of the application due to faster load times.
*/
interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  // Resolving the params promise
  const resolvedParams = React.use(params);
  return <p>{resolvedParams.id}</p>;
};

export default Protected(ProjectPage);
