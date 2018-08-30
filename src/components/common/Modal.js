import React from "react";
// if (props.showModal) {
//   let modal = document.getElementById("modalButton");
//   modal.click();
// }
const Modal = props => {
  return (
    <div>
      <button
        type="button"
        id="modalButton"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalLong"
        hidden="true"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Account Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
