import React, {useState, useEffect} from "react";

import AppLayout from "../../components/AppLayout";
import interviewsData from "../../data/interviews";

const Interview = (props) => {
    const [ interview, setInterview ] = useState(props.interview);

    if(!interview) {
        return(
            <AppLayout>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">#sorry</h1>
                        <p className="col-md-8 fs-4">더욱 좋은 면접 질문을 준비하도록 할께요 ❤️</p>
                    </div>
                </div>
            </AppLayout>
        )
    } else {
        return(
            <AppLayout>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">#{interview.category}</h1>
                        <p className="col-md-8 fs-4">{interview.interview}</p>
                        <button className="btn btn-primary btn-lg" type="button">대답하기</button>
                    </div>
                </div>
            </AppLayout>
        )
    }
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    
    const interview = await interviewsData.data.find((interviewData) => (interviewData.id === (parseInt(id))));
    return { props: { interview: (interview === undefined ? null : interview) }};
}

export default Interview;