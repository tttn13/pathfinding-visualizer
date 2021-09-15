import React from "react";
import walldemo from "../../assets/gif/walldemo.gif";

export const FourthSlide = () => {
  return (
    <div
      className="modal fade"
      id="modalToggle4"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel2">
              Add Walls 
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
                Move cursor anywhere on the grid to add walls. Walls are
                impenetrable, meaning that a path cannot cross through them.
              </p>
              <img className="img-fluid" src={walldemo} alt="create walls" />
            </div>
            <br></br>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle3"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle5"
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
