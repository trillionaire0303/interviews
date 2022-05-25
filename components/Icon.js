import React from "react";


import Link from "next/link";


const Icon = ({ categoryName, name, numberOfInterviews, imgUrl }) => {
    
    return(
        <Link href={`/category/${categoryName}`}>
            <a style={{ textDecoration: 'none'}}>
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${imgUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{name}</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                    
                    <li class="d-flex align-items-center me-3">
                        <small>#{categoryName}</small>
                    </li>
                    <li class="d-flex align-items-center">
                        <small>{numberOfInterviews}개의 면접 질문</small>
                    </li>
                    </ul>
                </div>
                </div>
            </a>
        </Link>
    )
}

export default Icon;