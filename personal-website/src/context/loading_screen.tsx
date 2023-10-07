'use client'

import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from './loading_screen.module.css';

interface LoadingScreenContextType {
  isLoading: boolean;
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

  return (
    <Context.Provider value={{isLoading, setIsLoading, navigate}}>
        <div style={{width: (isLoading ? '100vw' : '0vw')}} className={styles.loadingScreen}></div>
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
