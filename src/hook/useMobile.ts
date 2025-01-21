import React from 'react'

const MOBILEBREAK = 1024;

export function useMobile() {
    const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
    React.useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILEBREAK - 1}px)`);
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILEBREAK);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILEBREAK);
        return () => mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}