import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainText from "./MainText/MainText";
import NavBar from "./NavBar";
import Grid from "./Grid";
import "./PathFinder.css";
import { getGrid } from "../redux/actions/gridActions";
import { getInitialGrid } from "./utils/gridUtils";
import { useToggleView } from "./customHooks/useToggleView";
import { ModalBox } from "./ModalBox/ModalBoxContainer";
import {
  selectRowCount,
  selectColCount,
  selectAlgo,
  selectAlgoOptions,
} from "../redux/actions/selectors";
import { AlgoExplained } from "./AlgoExplained";

const PathFinder = () => {
  const dispatch = useDispatch();
  const rowCount = useSelector(selectRowCount);
  const colCount = useSelector(selectColCount);
  const currentAlgo = useSelector(selectAlgo);
  const algoOptions = useSelector(selectAlgoOptions);
  const { dekstopView, handleToggle } = useToggleView();

  useEffect(() => {
    //component did mount
    let initGrid = getInitialGrid(rowCount, colCount);
    dispatch(getGrid({ grid: initGrid }));
    document.querySelector('[data-bs-target="#modalToggle0"]').click();
  }, []);

  return (
    <div className="content">
      <ModalBox />
      <NavBar />
      <div className="mt-3 custom-collapse">
        <ul className="list-group collapse" id="buttons-container">
          <li className="m-2 ">
            {dekstopView ? (
              <button
                type="button"
                className="btn btn-outline-secondary text-dark"
                onClick={handleToggle}
              >
                Mobile View
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary text-dark"
                onClick={handleToggle}
              >
                Desktop View
              </button>
            )}
          </li>
          <li className="m-2">
            <button
              className="btn btn-outline-secondary text-dark"
              id="tutorialBtn"
              data-bs-toggle="modal"
              data-bs-target="#modalToggle0"
            >
              Tutorial
            </button>
            <ModalBox />
          </li>

          <li className="m-2">
            Understand Algorithm <br></br>
            <b>
              <AlgoExplained
                currentAlgo={currentAlgo}
                algoOptions={algoOptions}
              />
            </b>
          </li>
        </ul>
      </div>
      <Grid />
      <MainText />
    </div>
  );
};

export default PathFinder;
