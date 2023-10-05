'use client'

import styles from './page.module.css'

import ResumeIcon from '@/icon/Resume';
import FolderIcon from '@/icon/Folder';

export default function Home() {
    
  return (
    <div className={styles.outerContainerCss}>
        <p className={styles.headerCss}>Zeki Can EKSI</p>
        <div className={styles.innerContainerCss}>
            <ResumeIcon width={15} height={15}/>
            <p className={styles.label}>CV</p>
        </div>
        <div className={styles.innerContainerCss}>
            <FolderIcon width={15} height={15}/>
            <p className={styles.label}>Projects</p>
        </div>
    </div>
  )
}
