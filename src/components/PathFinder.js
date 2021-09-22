import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainText from "./MainText/MainText";
import NavBar from "./NavBar";
import Grid from "./Grid";
import "../css/PathFinder.css";
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

const PathFinder = () => {
  const dispatch = useDispatch();
  const grid = useSelector(selectGrid);
  const rowCount = useSelector(selectRowCount);
  const colCount = useSelector(selectColCount);

  let initGrid = getInitialGrid(rowCount, colCount);
  useEffect(() => {
    dispatch(getGrid({ grid: initGrid }));
    // document.querySelector('[data-bs-target="#modalToggle0"]').click();
  }, []);

  return (
    <div className="content">
      <ModalBox />
      {grid.length > 0 ? <NavBar grid={grid} /> : null}
      
      {grid.length > 0 ? <Grid grid={grid} /> : null}
      <MainText />
    </div>
  );
};

export default PathFinder;
