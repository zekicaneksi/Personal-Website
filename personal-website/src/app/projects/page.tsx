"use client";

import { useContext, useEffect } from "react";
import { Context as LoadingScreenContext } from "@/context/loading_screen";

import styles from "./page.module.css";

const ProjectCube = () => {
  return (
    <div className={styles.cubeDiv}>
      <p>Hello</p>
    </div>
  );
};

export default function Page() {
  const { setIsLoading, navigate } = useContext(LoadingScreenContext) || {};

  useEffect(() => {
    if (setIsLoading !== undefined) setIsLoading(false);
  }, [setIsLoading]);

  return (
    <div>
      <div>
        <h1
          style={{ color: "red" }}
          onClick={() => {
            if (navigate !== undefined) navigate("/");
          }}
        >
          click on me to go back
        </h1>
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
          <ProjectCube key={key} />
        ))}
      </div>
    </div>
  );
}
