import React from "react";
import Link from "next/link";

const InterviewCard = ({ 
    interviewId = 1,
    category,
    interview
}) => {
    return(
        <Link href={`/interview/${interviewId}`}>
            <a style={{ textDecoration: 'none', color: 'black' }}>
                <div className="card">
                    <div className="card-header">
                        #{category}
                    </div>
                    <div className="card-body">
                        {interview}
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default InterviewCard;