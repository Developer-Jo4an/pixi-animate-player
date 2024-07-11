import React from "react";
import {FaFileArchive} from "react-icons/fa";
import {useDrag} from "../../hooks/useDrag";

const PixiAnimatePlayer = ({props}) => {
  const handlers = useDrag();
  const {dragArea} = props;

  return (
    <div className={"pixi-animate-player"}>
      <div className={dragArea.className} {...handlers}>
        <div className={dragArea.classNameFirstChild}>
          <FaFileArchive/>
          <span className={"drag-area__info"}>{dragArea.info}</span>
        </div>
      </div>
    </div>
  );
};

export default PixiAnimatePlayer;
