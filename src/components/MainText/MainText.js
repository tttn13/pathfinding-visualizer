import React from "react";
import FlagSVG from "../../assets/images/FlagSVG";
import ChevronSVG from "../../assets/images/ChevronSVG";
import "./MainText.css";

const MainText = () => {
  return (
    <div id="mainText" className="">
      <ul className="list-group" id="mainTextList">
        <li className="list-group-item border-0 d-flex justify-content-center align-items-center">
          <div className="start me-1">
            <ChevronSVG />
          </div>
          Start Node
        </li>
        <li className="list-group-item border-0 d-flex justify-content-center align-items-center">
          <div className="target me-1">
            <FlagSVG size={"16"} />
          </div>
          Target Node
        </li>
        <li className="list-group-item border-0 d-flex justify-content-center align-items-center">
          <div className="unvisited me-1"></div>Unvisited Node
        </li>
        <li className="list-group-item border-0 d-flex justify-content-center align-items-center">
          <div className="visited me-1"></div>
          <div className="visited2 me-1"></div>Visited Node
        </li>
        <li className="list-group-item border-0 d-flex justify-content-center align-items-center">
          <div className="shortest-path me-1"></div>Shortest-path Node
        </li>
        <li className="list-group-item border-0 d-flex justify-content-center align-items-center">
          <div className="wall me-1"></div>Wall Node
        </li>
      </ul>
    </div>
  );
};

export default MainText;
