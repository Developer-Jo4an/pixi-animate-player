import React from "react";
import PageDescription from "../components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "../constants/page-description";
import PageComponents from "../components/pageComponent/PageComponents";

export default function Home() {
  return (
    <div className={"container"}>
      <PageDescription {...defaultPage}/>
      <PageComponents/>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
