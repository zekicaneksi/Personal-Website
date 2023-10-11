"use client";

import { usePathname, useRouter } from "next/navigation";
import BackIcon from "@/icon/Back";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div>
        <BackIcon
          width={4}
          height={4}
          onClick={() => {
            router.push(pathname.substring(0, pathname.lastIndexOf("/") + 1));
          }}
          className={styles.backIcon}
        />
      </div>
      {children}
    </>
  );
}
