import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGrid } from "../../redux/actions/gridActions";
import {
  selectRunning,
  selectRowCount,
  selectColCount,
} from "../../redux/actions/selectors";
import { getInitialGrid } from "../utils/gridUtils";
import { getNodeColor } from "../utils/createAnimations";

export const useMaze = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(selectRunning);
  const rowCountDesktop = useSelector(selectRowCount);
  const colCountDesktop = useSelector(selectColCount);
  const [mazeBtnIsActive, setMazeBtnActive] = useState(false);

  const handleMazeBtn = () => {
    if (!isRunning) {
      setMazeBtnActive(true);
      const newGrid = createMaze(rowCountDesktop, colCountDesktop);
      dispatch(getGrid({ grid: newGrid }));
    }
  }

  useEffect(() => {
    if (mazeBtnIsActive) setMazeBtnActive(false);
  }, [mazeBtnIsActive]);

  return {
    mazeBtnIsActive,
    setMazeBtnActive,
    handleMazeBtn,
  };
};

const createMaze = (rowCountDesktop, colCountDesktop) => {
  let numsOfRows = rowCountDesktop;
  let numsOfCols = colCountDesktop;
  let prefix = 10;
  let wallNodes = [];

  let grid = getInitialGrid(numsOfRows, numsOfCols);
  for (let i = 0; i < Math.floor(prefix * numsOfRows); i++) {
    const randomRow = Math.floor(Math.random() * (numsOfRows - 1));
    const randomCol = Math.floor(Math.random() * (numsOfCols - 1));
    let randomNode = grid[randomRow][randomCol];
    if (!randomNode.isStart && !randomNode.isFinish) {
      randomNode.isWall = true;
      randomNode.type = getNodeColor("WALL");
      wallNodes.push(randomNode);
    }
  }
  return grid;
};
