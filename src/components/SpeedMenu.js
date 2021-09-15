import React from "react";
import { useDispatch } from "react-redux";
import { changeSpeed } from "../redux/actions/gridActions";

const SpeedMenu = ({ speed, speedOptions }) => {
  const dispatch = useDispatch();
   
  return (
    
      <select
        className="form-select speed-menu"
        aria-label="Default select example"
        id="speed-menu"
        name="SPEED_OPTION"
        onChange={(e) => {
            const currSpeed = speedOptions.find((item) => item.type === e.target.value);
            if (speed !== e.target.value) {
                dispatch(changeSpeed({ speed: currSpeed.id }));
            }
        }}
      >
        <option hidden={true}>Choose speed</option>
        {speedOptions
          ? speedOptions.map((item) => (
              <option key={item.id} value={item.type}>
                {item.type}
              </option>
            ))
          : "Loading menu"}
      </select>

  );
};

export default SpeedMenu;
