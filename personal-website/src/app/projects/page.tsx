'use client'

import { useContext, useEffect } from 'react';
import { Context as LoadingScreenContext } from '@/context/loading_screen';


export default function Page(){
    
    const {setIsLoading, navigate} = useContext(LoadingScreenContext) || {};
    
    useEffect(() => {
        if(setIsLoading !== undefined) setIsLoading(false);
    },[setIsLoading])

    return(
        <div>
            <h1 style={{color: 'red'}}>hello world</h1>
            <h1 style={{color: 'red'}} onClick={() => {if(navigate !== undefined) navigate('/')}}>click on me to go back</h1>
        </div>
    )
}
