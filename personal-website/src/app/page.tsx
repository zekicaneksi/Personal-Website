'use client'

import ResumeIcon from '@/icon/Resume';
import FolderIcon from '@/icon/Folder';
import SpiderIcon from '@/icon/Spider';
import SpiderWebIcon from '@/icon/SpiderWeb';
import SpiderLineIcon from '@/icon/SpiderLine';

export default function Home() {
    
    const headerCss = {
        fontSize: "8rem",
        fontFamily: 'Lacquer',
        color: '#A02828',
    }

  return (
    <div>
        <p style={headerCss}>Zeki Can EKSI</p>
        <ResumeIcon/>
        <FolderIcon/>
        <SpiderIcon/>
        <SpiderWebIcon/>
        <SpiderLineIcon/>
    </div>
  )
}
