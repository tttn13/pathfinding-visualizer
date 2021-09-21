import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { getGrid } from "../../redux/actions/gridActions";
import { selectRunning } from "../../redux/actions/selectors";
import { clearWalls } from "../utils/boardControls";

export const useClearWalls = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(selectRunning);
  const [clearWallsBtn, setClearWallsBtn] = useState(false);

  const handleClearWallsBtn = useCallback((grid) => {
    if (!isRunning) {
      setClearWallsBtn(true)
      const gridWithNoWalls = clearWalls(grid)
      dispatch(getGrid({grid: gridWithNoWalls }))
    }
  }, [dispatch]);

  useEffect(() => {

    console.log("use clear walls ")
    if (clearWallsBtn) setClearWallsBtn(false);

  }, [clearWallsBtn]);

  return {
    clearWallsBtn,
    setClearWallsBtn,
    handleClearWallsBtn
  };
};
