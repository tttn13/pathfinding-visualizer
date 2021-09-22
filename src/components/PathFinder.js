import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainText from "./MainText/MainText";
import NavBar from "./NavBar";
import Grid from "./Grid";
import "./PathFinder.css";
import { getGrid } from "../redux/actions/gridActions";
import { getInitialGrid } from "./utils/gridUtils";
import { ModalBox } from "./ModalBox/ModalBoxContainer";
import {
  selectRowCount,
  selectColCount,
  selectAlgo,
  selectAlgoOptions,
  selectGrid,
} from "../redux/actions/selectors";
import { AlgoExplained } from "./AlgoExplained";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const PathFinder = () => {
  const dispatch = useDispatch();
  const grid = useSelector(selectGrid);
  const rowCount = useSelector(selectRowCount);
  const colCount = useSelector(selectColCount);
  const currentAlgo = useSelector(selectAlgo);
  const algoOptions = useSelector(selectAlgoOptions);

  let initGrid = getInitialGrid(rowCount, colCount);
  useEffect(() => {
    console.log("first render");
    dispatch(getGrid({ grid: initGrid }));
    document.querySelector('[data-bs-target="#modalToggle0"]').click();
  }, []);

  return (
    <div className="content">
      <ModalBox />
      {grid.length > 0 ? <NavBar grid={grid} /> : null}
      {/* <div className="mt-3 custom-collapse">
        <ul className="list-group collapse" id="buttons-container">
          <li className="m-2">
            <button
              className="btn btn-outline-secondary "
              id="tutorialBtn"
              data-bs-toggle="modal"
              data-bs-target="#modalToggle0"
            >
              Walk me through the app
            </button>
            <ModalBox />
          </li>

          <li className="m-2">
            <button
              className="btn btn-outline-secondary "
              id="algoExplainedBtn"
            >
              
              <b>
                <AlgoExplained
                  currentAlgo={currentAlgo}
                  algoOptions={algoOptions}
                />
              </b>{" "}
              algorithm {" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </li>
        </ul>
      </div> */}
      {grid.length > 0 ? <Grid grid={grid} /> : null}
      <MainText />
    </div>
  );
};

export default PathFinder;
