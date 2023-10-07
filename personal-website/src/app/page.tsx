'use client'

import styles from './page.module.css'

import ResumeIcon from '@/icon/Resume';
import FolderIcon from '@/icon/Folder';

import { useContext, useEffect } from 'react';
import { Context as LoadingScreenContext } from '@/context/loading_screen';



export default function Home() {

    
    const {isLoading, setIsLoading, navigate} = useContext(LoadingScreenContext);

    useEffect(() => {
        setIsLoading(false)
    }, [])

  return (
    <div className={styles.outerContainerCss}>
        <p className={styles.headerCss}>Zeki Can EKSI</p>
        <div className={styles.innerContainerCss}>
            <ResumeIcon width={15} height={15}/>
            <p className={styles.label}>CV</p>
        </div>
        <div className={styles.innerContainerCss} onClick={() => navigate('projects')}>
            <FolderIcon width={15} height={15}/>
            <p className={styles.label}>Projects</p>
        </div>
    </div>
  )
}
