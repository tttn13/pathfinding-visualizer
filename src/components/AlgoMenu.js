import React from "react";
import { useDispatch } from "react-redux";
import { changeAlgo } from "../redux/actions/gridActions";

const AlgoMenu = ({ currentAlgo, algoOptions }) => {
  const dispatch = useDispatch();

  return (
      <select
        className="form-select algo-menu"
        aria-label="Default select example"
        name="ALGO_OPTION"
        onChange={(e) => {
          const algo = algoOptions.find((algo) => algo.type === e.target.value);
          if (currentAlgo !== algo.id) {
            dispatch(changeAlgo({ currentAlgo: algo.id }));
          }
        }}
      >
        <option hidden={true}>Choose algorithm</option>

        {algoOptions
          ? algoOptions.map((algo) => (
              <option key={algo.id} value={algo.type}>
                {algo.type}
              </option>
            ))
          : " "}
      </select>
  );
};

export default AlgoMenu;
