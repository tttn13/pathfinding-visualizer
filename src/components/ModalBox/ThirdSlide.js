import React from "react";
import movenode from "../../assets/gif/movenode.gif";

export const ThirdSlide = () => {
  return (
    <div
      className="modal fade"
      id="modalToggle3"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel2">
              Start Node and Goal Node
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
              Move start node and goal node anywhere on the grid.
              </p>
              <img className="img-fluid" src={movenode} alt="move nodes" />
            </div>
            
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle2"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle4"
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
