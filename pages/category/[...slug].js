import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import InterviewCard from "../../components/InterviewCard";
import interviewsData from "../../data/interviews";
import categoriesData from "../../data/categories";

const Category = (props) => {
    const [ interviews, setInterviews ] = useState(props.interviews);

    return(
        <>
        <Head>
            <title>{props.categoryName} 면접 리스트</title>

        </Head>
        <AppLayout>
            {interviews.length === 0 ? (
                <div>
                    더 좋은 면접 리스트를 위해 조금만 더 기다려 주세요 ❤️
                </div>
            ) : (
                <div>
                    <div className="d-grid gap-3">
                        {interviews.map((interview, index) => {
                            return(
                                <div key={index} className="p-2">
                                    <InterviewCard
                                        category={interview.category}
                                        interview={interview.interview}
                                        interviewId={interview.id}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </AppLayout>
        </>
    )
}

export async function getServerSideProps(context) {
    let categoryName = "";

    const firstCategory = context.params.slug[0];
    const interviews = interviewsData.data.filter((interviewData) => (interviewData.category === firstCategory));
    
    categoryName = interviews.length === 0 ? "준비 중인 면접 리스트입니다" : (categoriesData.data.find((categoryData) => categoryData.categoryName === interviews[0].category)).name;



    return { props: { interviews, categoryName,} };
}

export default Category;