import React from "react";

export const FirstSlide = () => {
  return (
    <div
      className="modal fade"
      id="modalToggle1"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content ">
          <div className="modal-header">
            <h5 className="modal-title " id="exampleModalToggleLabel">
              What is a Pathfinding Algorithm?
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
              {" "}
              <a href="https://en.wikipedia.org/wiki/Pathfinding">
                <b>Pathfinding Algorithm</b>{" "}
              </a>
              is the plotting of the shortest route between two points. At its
              core, a pathfinding method searches a graph by starting at one
              vertex and exploring adjacent nodes until the destination node is
              reached, generally with the intent of finding the cheapest route.
            </p>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-target="#modalToggle2"
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
