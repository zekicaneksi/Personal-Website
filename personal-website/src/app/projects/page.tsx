"use client";

import { useContext, useEffect, useState, createRef } from "react";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import { Context as LoadingScreenContext } from "@/context/loading_screen";
import ProjectCube from "./ProjectCube";

import SpooderIcon from "@/icon/Spider";
import styles from "./ProjectCube.module.css";

export default function Page() {
  // Loading stuff
  const { setIsLoading, navigate } = useContext(LoadingScreenContext) || {};

  useEffect(() => {
    if (setIsLoading !== undefined) setIsLoading(false);
  }, [setIsLoading]);

  // Spooder stuff

  const [isDivSliding, setIsDivSliding] = useState<
    "unset" | "sliding" | "finished"
  >("unset");
  const [spooderCount, setSpooderCount] = useState(0);
  const windowDimensions = useWindowDimensions();

  const divRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const cubeWidth =
      divRef.current?.getElementsByTagName("div")[0].clientWidth;

    if (cubeWidth !== undefined && windowDimensions !== undefined)
      setSpooderCount(Math.round(windowDimensions.width / cubeWidth));
  }, [windowDimensions, divRef]);

  useEffect(() => {
    setTimeout(() => {
      setIsDivSliding("sliding");
      setTimeout(() => {
        setIsDivSliding("finished");
      }, 3000);
    }, 500);
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          transition: "transform 3s",
          transform:
            isDivSliding !== "unset" ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <ProjectCube
          title={"Hell232o3 yaelow melow fellow"}
          imgSrc={"/project_thumbnail/36.jpg"}
          projectUrl={"test-project"}
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
          <ProjectCube
            key={key}
            title={"Hell232o3 yaelow melow fellow"}
            imgSrc={"/project_thumbnail/36.jpg"}
            projectUrl={"test-project"}
          />
        ))}
        {[...Array(spooderCount)].map((e, i) => (
          <div
            key={i}
            className={styles.spooderDiv}
            style={{ display: isDivSliding !== "finished" ? "flex" : "none" }}
          >
            <div
              className={styles.stringDiv}
              style={{
                borderRadius: isDivSliding !== "unset" ? "100%" : "1%",
                height: isDivSliding !== "unset" ? "200%" : "1%",
                width: isDivSliding !== "unset" ? "0%" : "5%",
              }}
            ></div>
            <SpooderIcon
              style={{ top: isDivSliding !== "unset" ? "200%" : "0px" }}
              fill={"#2B572B"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
