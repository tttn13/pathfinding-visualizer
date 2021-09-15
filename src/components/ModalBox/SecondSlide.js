import React from "react";
import menudemo from "../../assets/gif/menudemo.gif";
export const SecondSlide = () => {
  return (
    <div
      className="modal fade"
      id="modalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel2">
              Pick An Algorithm
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-start">
              Choose an algorithm and speed from the drop-down menu. Note that
              some algorithms are unweighted, while others are weighted.
              Unweighted algorithms do not take turns or weight nodes into
              account, whereas weighted ones do. Additionally, not all
              algorithms guarantee the shortest path.
            </p>
            <img
              className="img-fluid"
              src={menudemo}
              alt="pick algo and speed"
            />
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle1"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle3"
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
