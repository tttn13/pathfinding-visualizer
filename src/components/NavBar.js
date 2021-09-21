import { useSelector  } from "react-redux";
import FlagSVG from "./../assets/images/FlagSVG";
import AlgoMenu from "./AlgoMenu";
import SpeedMenu from "./SpeedMenu";
import {
  selectAlgo,
  selectAlgoOptions,
  selectSpeed,
  selectSpeedOptions,
} from "../redux/actions/selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useAnimations } from './customHooks/useAnimations'
import { useMaze } from './customHooks/useMaze';
import { useReset } from "./customHooks/useReset"
import { useClearWalls } from "./customHooks/useClearWalls";

const NavBar = ({ grid }) => {
  const currentAlgo = useSelector(selectAlgo);
  const algoOptions = useSelector(selectAlgoOptions);
  const speed = useSelector(selectSpeed);
  const speedOptions = useSelector(selectSpeedOptions);
  const handlePlayBtn = useAnimations();
  const { handleMazeBtn } = useMaze();
  const { handleClearGridBtn } = useReset()
  const { handleClearWallsBtn } = useClearWalls()
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark sticky-top"
      id="navContainer"
      style={{ backgroundColor: "#1B5E20" }}
    >
      <a
        className="navbar-brand mx-3"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
      >
        {" "}
        <FlagSVG color={"white"} size={"20"} />
        <b style={{ padding: "10px" }}>PathFinder</b>
      </a>

      <button
        className="navbar-toggler me-2"
        id="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse p-1" id="navbarCollapse">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          
          <li className="nav-item active m-2"> 
            <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  handleMazeBtn()}
                }>
                Create Maze
              </button>
          </li>
          
          <li className="nav-item active m-2">
            <AlgoMenu currentAlgo={currentAlgo} algoOptions={algoOptions} />
          </li>

          <li className="nav-item active m-2">
            <SpeedMenu speed={speed} speedOptions={speedOptions} />
          </li>

          <li className="nav-item  m-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                if (currentAlgo === null || speed === null) {
                  alert("Please choose algorithm and/or speed");
              } else handlePlayBtn(grid) }}
            >
              {" "}
              <FontAwesomeIcon icon={faPlay} size="lg" />
            </button>
          </li>

          <li className="nav-item m-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => 
                handleClearGridBtn(grid)
              }
            >
              Clear Grid
            </button>
          </li>

          <li className="nav-item m-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleClearWallsBtn(grid) }
            >
              Clear Walls
            </button>
          </li>
        </ul>
       
      </div>
    </nav>
  );
};

export default NavBar;
