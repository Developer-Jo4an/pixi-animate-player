import React from "react";
import {useApp} from "../../redux/reducer/application";
import {appContent} from "../../constants/appContent";

const PageComponents = () => {
  const {state} = useApp();
  const {Component = "div", props = {}} = appContent[state] ?? {};
  return (
    <div className={"page-component"}>
      <Component props={props}/>
    </div>
  );
};

export default PageComponents;
