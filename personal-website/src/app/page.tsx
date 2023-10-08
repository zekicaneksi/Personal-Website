'use client'

import styles from './page.module.css'

import ResumeIcon from '@/icon/Resume';
import FolderIcon from '@/icon/Folder';

import { useContext, useEffect } from 'react';
import { Context as LoadingScreenContext } from '@/context/loading_screen';



export default function Home() {
 
    const {setIsLoading, navigate} = useContext(LoadingScreenContext) || {};

    useEffect(() => {
        if(setIsLoading !== undefined) setIsLoading(false)
    }, [setIsLoading])

  return (
    <div className={styles.outerContainerCss}>
        <p className={styles.headerCss}>Zeki Can EKSI</p>
        <div className={styles.innerContainerCss}>
            <a target="_blank" href="/zeki_can_eksi_cv_en.pdf" style={{width: '100%', height: '100%', position: 'absolute'}}></a>
            <ResumeIcon width={15} height={15}/>
            <p className={styles.label}>CV</p>
        </div>
        <div className={styles.innerContainerCss} onClick={() => {if(navigate !== undefined )navigate('projects')}}>
            <FolderIcon width={15} height={15}/>
            <p className={styles.label}>Projects</p>
        </div>
    </div>
  )
}
