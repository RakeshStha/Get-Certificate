import React, { useState } from "react";
import Certificate from "../assets/image/certificate.png";

const CreateCertificate = () => {
  const canvas = React.useRef();

  const [userName, setUserName] = useState("");
  const [exprDate, setExprDate] = useState("");

  React.useEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context);
  });

  const draw = (context) => {
    const imageObj = new Image();
    imageObj.onload = () => {
      context.drawImage(imageObj, 10, 10, 700, 470);
      context.font = "20pt Calibri";
      context.fillText(userName, 300, 240);
      context.font = "12pt Calibri";
      context.fillText(exprDate, 358, 358);
    };
    imageObj.src = Certificate;
  };

  const Download = () => {
    var canvas = document.getElementById("canvas");
    var url = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "certificate.png";
    link.href = url;
    link.click();
  };
  return (
    <div className="row d-flex align-items-center justify-content-center m-4">
      <div className="col-4">
        <div className="card m-4">
          <div className="card-header">
            <h5 className="p-2">Create Certificate</h5>
          </div>
          <div className="card-body p-4">
            <div className="form-group mb-3">
              <label htmlFor="name" className="mb-2">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name for certificate"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exprDate" className="mb-2">
                Expire Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                value={exprDate}
                onChange={(e) => setExprDate(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
            <button className="btn btn-outline-primary">Submit</button>
        </div> */}
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="text-center">
          <canvas id="canvas" ref={canvas} width={700} height={470} />
          <button
            className="btn btn-primary w-50 mt-4"
            onClick={() => Download()}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
