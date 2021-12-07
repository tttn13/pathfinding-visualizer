import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGrid } from "../../redux/actions/gridActions";
import { selectRunning } from "../../redux/actions/selectors";
import { resetGrid } from "../utils/boardControls";

export const useReset = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(selectRunning);
  const [clearBtn, setClearGridBtn] = useState(false);
  const handleClearGridBtn = (grid) => {
      if (!isRunning) {
        setClearGridBtn(true);
        const emptyGrid = resetGrid(grid);
        dispatch(getGrid({ grid: emptyGrid }));
      }
    }

  useEffect(() => {
    if (clearBtn) setClearGridBtn(false);
  }, [clearBtn]);

  return {
    clearBtn,
    setClearGridBtn,
    handleClearGridBtn,
  };
};
