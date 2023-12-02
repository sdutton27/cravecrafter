import { useEffect, useState } from 'react';
import { setUser } from '../utils/auth';

/**
 * Warps entire app, invokes the setUser() function
 * 
 * @param {*} param0 
 * @returns 
 */
const MainWrapper = ({children}) => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const handler = async () => {
            setLoading(true);
            await setUser();
            setLoading(false);
        };
        handler();
    },[]);

    return <>{loading ? null : children}</>
}

export default MainWrapper;