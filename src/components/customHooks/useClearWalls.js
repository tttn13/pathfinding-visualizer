import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGrid } from "../../redux/actions/gridActions";
import { selectRunning } from "../../redux/actions/selectors";
import { clearWalls } from "../utils/boardControls";

export const useClearWalls = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(selectRunning);
  const [clearWallsActive, setClearWallsActive] = useState(false);

  const handleClearWallsBtn = (grid) => {
      if (!isRunning) {
        setClearWallsActive(true);
        const gridWithNoWalls = clearWalls(grid);
        dispatch(getGrid({ grid: gridWithNoWalls }));
      }
    }

  useEffect(() => {
    if (clearWallsActive) setClearWallsActive(false);
  }, [clearWallsActive]);

  return {
    clearWallsActive,
    setClearWallsActive,
    handleClearWallsBtn,
  };
};
