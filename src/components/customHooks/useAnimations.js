import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { changeRunningToggle, getGrid } from "../../redux/actions/gridActions";
import {
  selectRunning,
  selectAlgo,
  selectSpeed,
  selectGrid,
  selectAlgoOptions,
  selectStartNodeRow,
  selectStartNodeCol,
  selectFinishNodeRow,
  selectFinishNodeCol,
} from "../../redux/actions/selectors";
import { resetGrid } from "../utils/boardControls";
import { startApp } from "../utils/createAnimations";

export const useAnimations = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(selectRunning);
  const grid = useSelector(selectGrid);
  const currentAlgo = useSelector(selectAlgo);
  const speed = useSelector(selectSpeed);
  const algoOptions = useSelector(selectAlgoOptions);
  const START_NODE_ROW = useSelector(selectStartNodeRow);
  const START_NODE_COL = useSelector(selectStartNodeCol);
  const FINISH_NODE_ROW = useSelector(selectFinishNodeRow);
  const FINISH_NODE_COL = useSelector(selectFinishNodeCol);

  const handlePlayBtn = useCallback((grid) => {
    if (!isRunning) {
      const emptyGrid = resetGrid(grid)
      dispatch(getGrid({grid: emptyGrid }))
      dispatch(changeRunningToggle());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isRunning) {
      const startNode = grid[START_NODE_ROW][START_NODE_COL];
      const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      const algorithm = algoOptions.find((algo) => algo.id === currentAlgo);
      const gridClone = [...grid]
      startApp(gridClone, algorithm, startNode, finishNode, speed);
    }
  }, [isRunning]);

  return handlePlayBtn;
};
