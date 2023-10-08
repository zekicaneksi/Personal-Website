'use client'

import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from './loading_screen.module.css';

import SpiderIcon from '@/icon/Spider'

interface LoadingScreenContextType {
  setIsLoading: Function;
  navigate: Function;
}

const Context = createContext<LoadingScreenContextType | null>(null)

const ContextProvider = (props: {children : React.ReactNode}) => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    function navigate(url : string){
        setIsLoading(true)
        setTimeout(() => {router.push(url)}, 3000)
    }

    const spiderDropCss : React.CSSProperties = {
        position: 'absolute',
        top: isLoading ? '65vh' : '0vh',
        left: '50vw',
        transform: 'translate(-50%, -100%)',
        transition: 'top 2.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const top_spiderLineStyleCss : React.CSSProperties = {
        width: '10px',
        height: '65vh',
        backgroundColor: 'rgb(73, 125, 73)',
        transition: 'border-radius 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s',
        borderRadius: isLoading ? '100%' : '1%',
    }

    const spiderCss : React.CSSProperties = {
        transform: 'rotate(0deg)',
    }

    function getCurtainCss(direction : 'left' | 'right') : React.CSSProperties {
        return {
            background: `repeating-linear-gradient(${direction === 'left' ? '110deg' : '70deg'}, #680303, #640202 10%)`
        }
    }

  return (
    <Context.Provider value={{setIsLoading, navigate}}>
        <div className={styles.loadingScreenContainer}>
           <div style={{width: (isLoading ? '50vw' : '0vw'), left: '0vw', ...(getCurtainCss('left')) }} className={`${styles.curtain}`}></div>
           <div style={{width: (isLoading ? '50vw' : '0vw'), left: (isLoading ? '50vw' : '100vw'), ...(getCurtainCss('right')) }} className={`${styles.curtain}`}></div>
            <div style={spiderDropCss}>
                <div style={top_spiderLineStyleCss}></div>
                <SpiderIcon style={spiderCss} fill={'#2B572B'}/>
            </div>
        </div>
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
