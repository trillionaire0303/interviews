import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Icon from "../components/Icon";
import categoriesData from '../data/categories'

export default function Home(props) {
  const [ categories, setCategories ] = useState(props.data);

  return (
    <AppLayout>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">모든 면접 질문을 한번에!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            면접 준비를 위해 더 이상 여러분의 소중한 시간을 블로그와 다른 사이트를 돌아다니는 데 낭비하지 마세요
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {categories.map((category, index) => {
            return (
              <div className="col" key={index}>
                <Icon 
                  categoryName={category.categoryName}
                  name={category.name}
                  numberOfInterviews={category.numberOfInterviews}
                  imgUrl={category.imgUrl}
                />

              </div>
            )
          })}
        </div>
    </AppLayout>
  )
}

export async function getServerSideProps(context) {
  const data = categoriesData.data;
  return { props: { data } };
}