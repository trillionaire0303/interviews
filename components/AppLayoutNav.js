import React from "react";
import Link from "next/link";

const AppLayoutNav = () => {
    return(
    <header className="container py-3">
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <Link href="/">
                <a className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Interviews</span>
                </a>
            </Link>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a className="me-3 py-2 text-dark text-decoration-none" href="/support">Support</a>
            </nav>
        </div>
    </header>
    )
}

export default AppLayoutNav;