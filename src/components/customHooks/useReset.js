import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect, useState } from "react"
import { getGrid, gridwithwalls } from "../../redux/actions/gridActions";
import { selectRunning,selectRowCount,selectColCount, selectDesktopView, selectGrid } from "../../redux/actions/selectors";
import { clearBoard } from "../utils/boardControls";
import { getInitialGrid, generateMobileView } from "../utils/gridUtils";
import { clearPath, resetGrid, clearWalls } from "../utils/boardControls";

const getGridWithOnlyWalls = (newGrid, oldGrid) => {
    
    for (let row = 0; row < newGrid.length; row++) {
        for (let col = 0; col < row.length; col++) {
            newGrid[row][col].isWall = oldGrid[row][col].isWall 
        }
    }
  };

export const useReset = () => {
    const dispatch = useDispatch()
    const isRunning = useSelector(selectRunning);
    const dekstopView = useSelector(selectDesktopView);
    const grid = useSelector(selectGrid);
    const rowCount = useSelector(selectRowCount);
    const colCount = useSelector(selectColCount);

    const [clearBtn, setClearBtn] = useState(false);

    useEffect(() => {
        // if (!isRunning) {
        //     let newGrid;
        //     (dekstopView) 
        //     ? newGrid = getInitialGrid(rowCount, colCount)
        //     : newGrid = generateMobileView();

        //     getGridWithOnlyWalls(newGrid, grid)
        //     console.log("calling clear path")
        //     dispatch(getGrid({ grid: newGrid }));
        //     setClearBtn(false)
        // }
        if (!isRunning) {
            dispatch(gridwithwalls())
            setClearBtn(false)
        }
    },[clearBtn])

    return { 
        clearBtn, 
        setClearBtn
    }
}