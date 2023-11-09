import Image from "next/image";
import styles from "./ProjectCube.module.css";

interface IProps {
  title: string;
  imgSrc: string;
  projectUrl: string;
}

const ProjectCube = (props: IProps) => {
  const { title, imgSrc, projectUrl } = props;

  return (
    <div
      className={styles.cubeDiv}
      onClick={() => {
        window.open(projectUrl, "_blank")?.focus();
      }}
    >
      <div className={styles.transparentLayer}></div>
      <h2 className={styles.projectTitle}>{title}</h2>
      <Image src={imgSrc} alt="Thumbnail of the project" fill />
    </div>
  );
};

export default ProjectCube;
