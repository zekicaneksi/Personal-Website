"use client";

import { useContext, useEffect } from "react";

import { Context as LoadingScreenContext } from "@/context/loading_screen";
import ProjectCube from "./ProjectCube";

export default function Page() {
  const { setIsLoading, navigate } = useContext(LoadingScreenContext) || {};

  useEffect(() => {
    if (setIsLoading !== undefined) setIsLoading(false);
  }, [setIsLoading]);

  return (
    <div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
          <ProjectCube
            key={key}
            title={"Hell232o3 yaelow melow fellow"}
            imgSrc={"/project_thumbnail/36.jpg"}
            projectUrl={"test-project"}
          />
        ))}
      </div>
    </div>
  );
}
