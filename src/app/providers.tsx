"use client"

import StoreProvider from "@/state/redux";

//provider wrap children as with storeprovider , ensuring that all components inside it
//have access to redux store
const Providers = ({children} : {children : React.ReactNode}) => {
    return <StoreProvider>{children}</StoreProvider>
};

export default Providers;