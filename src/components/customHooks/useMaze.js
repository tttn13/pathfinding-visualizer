import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGrid } from "../../redux/actions/gridActions";
import {
  selectRunning,
  selectGrid,
  selectDesktopView,
  selectRowCount,
  selectColCount,
  selectMobileRc,
  selectMobileCc,
} from "../../redux/actions/selectors";
import { clearBoard } from "../utils/boardControls";

const createMaze = (
  grid,
  isDesktopView,
  rowCountDesktop,
  colCountDesktop,
  mobileRowCount,
  mobileColCount
) => {
 
  clearBoard(grid);

  let rowCount = rowCountDesktop;
  let colCount = colCountDesktop;
  let prefix = 10;
  let wallNodes = [];

  if (!isDesktopView) {
    rowCount = mobileRowCount;
    colCount = mobileColCount;
    prefix = 7;
  }
  for (let i = 0; i < Math.floor(prefix * rowCount); i++) {
    const randomRow = Math.floor(Math.random() * (rowCount - 1));
    const randomCol = Math.floor(Math.random() * (colCount - 1));
    let randomNode = grid[randomRow][randomCol];
    if (!randomNode.isStart && !randomNode.isFinish) {
      randomNode.isWall = true;
      wallNodes.push(randomNode);
    }
  }
  return grid;
};

export const useMaze = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(selectRunning);
  const grid = useSelector(selectGrid);
  const isDesktopView = useSelector(selectDesktopView);
  const rowCountDesktop = useSelector(selectRowCount);
  const colCountDesktop = useSelector(selectColCount);
  const mobileRowCount = useSelector(selectMobileRc);
  const mobileColCount = useSelector(selectMobileCc);

  const [mazeBtnIsClicked, setMazeBtn] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      if (mazeBtnIsClicked === true) {
        setMazeBtn(false);
        const newGrid = createMaze(
          grid,
          isDesktopView,
          rowCountDesktop,
          colCountDesktop,
          mobileRowCount,
          mobileColCount
        );
        dispatch(getGrid({ grid: newGrid }));
      }
    }
  }, [mazeBtnIsClicked]);

  return {
    mazeBtnIsClicked,
    setMazeBtn,
  };
};
