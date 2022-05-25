import React from "react";
import AppLayoutNav from "./AppLayoutNav";

const AppLayout = ({ children }) => {
    return(
        <>
            <AppLayoutNav />
            <div className="container py-3">
                {children}
            </div>
        </>
    )
}

export default AppLayout;