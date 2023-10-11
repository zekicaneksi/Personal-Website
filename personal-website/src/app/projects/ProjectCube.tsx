import { useContext } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./ProjectCube.module.css";
import { Context as LoadingScreenContext } from "@/context/loading_screen";

interface IProps {
  title: string;
  imgSrc: string;
  projectUrl: string;
}

const ProjectCube = (props: IProps) => {
  const pathname = usePathname();

  const { title, imgSrc, projectUrl } = props;
  const { setIsLoading, navigate } = useContext(LoadingScreenContext) || {};

  return (
    <div
      className={styles.cubeDiv}
      onClick={() => {
        if (navigate !== undefined) navigate(pathname + "/" + projectUrl);
      }}
    >
      <div className={styles.transparentLayer}></div>
      <h2 className={styles.projectTitle}>{title}</h2>
      <Image src={imgSrc} alt="Thumbnail of the project" fill />
    </div>
  );
};

export default ProjectCube;
