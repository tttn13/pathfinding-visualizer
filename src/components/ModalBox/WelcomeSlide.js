import React from "react";
import FlagSVG from "../../assets/images/FlagSVG";

export const WelcomeSlide = () => {
  return (
    <div
      className="modal fade"
      id="modalToggle0"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content ">
          <div className="modal-header">
            <h4 className="modal-title " id="exampleModalToggleLabel">
              Welcome to Pathfinder {" "}
              <FlagSVG color={"dark"} size={"16"} />
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-start">
              This tutorial will walk you through the main features of
              this Pathfinding Visualizer application. 
              If you want to dive right in, please click <b>Skip Tutorial</b> button. 
              Otherwise, keep pressing  <b>Next</b>!
            </p>
            
          </div>

          <div className="modal-footer">
            <button className="btn btn-danger" data-bs-dismiss="modal">
              Skip Tutorial
            </button>

            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle1"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
