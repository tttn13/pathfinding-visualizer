import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"
import { getGrid, changeView } from "../../redux/actions/gridActions";
import { selectRunning,selectRowCount,selectColCount, selectDesktopView, selectGrid } from "../../redux/actions/selectors";
import { clearBoard } from "../utils/boardControls";
import { getInitialGrid, generateMobileView } from "../utils/gridUtils";


export const useToggleView = () => {
    const dispatch = useDispatch()
    const isRunning = useSelector(selectRunning);
    const dekstopView = useSelector(selectDesktopView);
    const grid = useSelector(selectGrid);
    const rowCount = useSelector(selectRowCount);
    const colCount = useSelector(selectColCount);

    const handleToggle = useCallback(() => {
        dispatch(changeView());
        clearBoard(grid);
    },[dispatch])
    
    useEffect(() => {
        if (!isRunning) {
            let newGrid;
            (dekstopView) 
            ? newGrid = getInitialGrid(rowCount, colCount)
            : newGrid = generateMobileView();
            dispatch(getGrid({ grid: newGrid }));
        }
    },[dekstopView])

    return { 
        dekstopView,
        handleToggle
    }
}