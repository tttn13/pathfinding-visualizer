import React from "react";
import mazedemo from "../../assets/gif/mazedemo.gif";

export const FifthSlide = () => {
  return (
    <div
      className="modal fade"
      id="modalToggle5"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel2">
              Generate Maze
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <p className="text-start">
              Generate mazes with "Create Maze" button.
              </p>
              <img className="img-fluid" src={mazedemo} alt="create mazes" />
            </div>
            <br></br>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle4"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Back
            </button>
            <button
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};
