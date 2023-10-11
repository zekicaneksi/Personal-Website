"use client";

import { useEffect, useContext } from "react";
import { Context as LoadingScreenContext } from "@/context/loading_screen";

const Page = () => {
  const { setIsLoading, navigate } = useContext(LoadingScreenContext) || {};

  useEffect(() => {
    if (setIsLoading !== undefined) setIsLoading(false);
  }, [setIsLoading]);

  return <p style={{ color: "red" }}>hellooo from your project</p>;
};

export default Page;
