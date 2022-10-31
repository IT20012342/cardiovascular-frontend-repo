import React, { useState } from "react";
import Pdf from "../components/WHO.pdf";
var bg = require("../CVDback10.jpg");

// const styles = {
//     main: {
//         backgroundImage: `url(${bg})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         width: '100vw',
//         height: '100vh'
//     }
// };

export default function AddDetails() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [bloodpressure, setbloodpressure] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [smoking, setSmoking] = useState("");
  const [output, setOutput] = useState("");
  const [resultColor, setResultColor] = useState("");
  const [resultBackColor, setResultBackColor] = useState("");

  function sendData(e) {
    e.preventDefault();

    const jsonObj = {
      age: age,
      sex: sex,
      bloodpressure: bloodpressure,
      cholesterol: cholesterol,
      diabetes: diabetes,
      smoking: smoking,
    };

    function generateResult(data) {
      if (data === 0) {
        setResultColor("rgb(33, 195, 84)");
        setResultBackColor("rgba(9, 171, 59, 0.2)");
        setOutput("No risk of cardiovascular disease in the next ten years");
        //setOutput("Your Risk is < 20% ");
      } else if (data === 1) {
        setResultColor("rgb(255, 75, 75)");
        setResultBackColor("rgba(255, 75, 75, 0.2)");
        //setOutput("Your Risk is > 20%");
        setOutput("High risk of cardiovascular disease in the next ten years");
      } else {
        alert("All the inputs are required");
      }
    }

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonObj),
    };
    fetch(
      "https://test-restapi-1.herokuapp.com/cardiac_prediction",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => generateResult(data));
  }

  const resetHandler = () => {
    setAge("");
    setSex("");
    setbloodpressure("");
    setCholesterol("");
    setDiabetes("");
    setSmoking("");
  };

  return (
    <div
      class="div1"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <nav class="navbar navbar-light" style={{ backgroundColor: "#600" }}>
        <span class="navbar-brand mb-0 h1" style={{ color: "white" }}>
          CVD Check
        </span>
        <span class="navbar-brand mb-0 h1">
          <a href={Pdf} target="_blank">
            <button
              class="btn btn-warning btn-rounded"
              id="btnPdf"
              title="Download WHO Chart"
              float="right"
              style={{
                textAlign: "right",
                "border-radius": "30%",
                fontWeight: "bold",
              }}
            >
              WHO Chart{" "}
            </button>
          </a>
        </span>
      </nav>
      <div class="borderClass" id="borderClass">
        <div
          className="d-flex justify-content-center"
          id="d-flex-justify-content-center"
        >
          <h1 id="d-flex-justify-content-center-h">
            {" "}
            10-Year CVD Risk Prediction of Sri Lankans
          </h1>
        </div>

        <div class="form-group" className="d-flex justify-content-center">
          <form onSubmit={sendData}>
            <div class="form-group row">
              <label class="col-sm col-form-label" id="col-sm-col-form-label">
                Age
              </label>
              <div class="col-sm text-center">
                <input
                  style={{
                    backgroundColor: "#201b1b",
                    color: "white",
                    width: "110%",
                  }}
                  type="number"
                  class="form-control"
                  id="age"
                  placeholder="years"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  required
                />
                <div class="placeholder" style={{ color: "white" }}>
                  years
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label" id="col-sm-col-form-label">
                Gender
              </label>
              <div class="col-sm">
                <div class="form-check form-check-inline">
                  <input
                    style={{ backgroundColor: "#201b1b", color: "white" }}
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender"
                    value="1"
                    checked={sex === "1"}
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                    required
                  />
                  <label class="form-check-label" id="col-sm-col-form-label">
                    Male
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    style={{
                      backgroundColor: "#201b1b",
                      color: "white",
                      width: "110%",
                    }}
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender"
                    value="0"
                    checked={sex === "0"}
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                  />
                  <label class="form-check-label" id="col-sm-col-form-label">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label" id="col-sm-col-form-label">
                Blood Pressure
              </label>
              <div class="col-sm">
                <input
                  style={{
                    backgroundColor: "#201b1b",
                    color: "white",
                    width: "110%",
                  }}
                  type="number"
                  class="form-control"
                  id="bloodPressure"
                  placeholder="mmHg"
                  value={bloodpressure}
                  onChange={(e) => {
                    setbloodpressure(e.target.value);
                  }}
                  required
                />
                <div class="placeholder" style={{ color: "white" }}>
                  mmHg
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label" id="col-sm-col-form-label">
                Cholesterol Level
              </label>
              <div class="col-sm">
                <input
                  style={{
                    backgroundColor: "#201b1b",
                    color: "white",
                    width: "110%",
                  }}
                  type="number"
                  class="form-control"
                  id="cholesterolLevel"
                  placeholder="mg/dl"
                  onChange={(e) => {
                    setCholesterol(e.target.value);
                  }}
                  required
                />
                <div class="placeholder" style={{ color: "white" }}>
                  mg/dl
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label" id="col-sm-col-form-label">
                Diabetes Patient
              </label>
              <div class="col-sm">
                <div class="form-check form-check-inline">
                  <input
                    style={{
                      backgroundColor: "#201b1b",
                      color: "white",
                      width: "110%",
                    }}
                    class="form-check-input"
                    type="radio"
                    name="diabetes"
                    id="diabetes"
                    value="1"
                    checked={diabetes === "1"}
                    onChange={(e) => {
                      setDiabetes(e.target.value);
                    }}
                    required
                  />
                  <label class="form-check-label" id="col-sm-col-form-label">
                    Yes
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    style={{
                      backgroundColor: "#201b1b",
                      color: "white",
                      width: "110%",
                    }}
                    class="form-check-input"
                    type="radio"
                    name="diabetes"
                    id="diabetes"
                    value="2"
                    checked={diabetes === "2"}
                    onChange={(e) => {
                      setDiabetes(e.target.value);
                    }}
                  />
                  <label class="form-check-label" id="col-sm-col-form-label">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label" id="col-sm-col-form-label">
                Smoking
              </label>
              <div class="col-sm text-center">
                <select
                  style={{
                    backgroundColor: "#201b1b",
                    color: "white",
                    width: "110%",
                  }}
                  class="custom-select my-1 mr-sm-2"
                  id="smoking"
                  onChange={(e) => {
                    setSmoking(e.target.value);
                  }}
                  required
                >
                  <option value="" selected>
                    Choose...
                  </option>
                  <option value="1" style={{}}>
                    Never
                  </option>
                  <option value="2">Stopped Recently</option>
                  <option value="3">Occasionally</option>
                  <option value="4">Everday</option>
                </select>
              </div>
            </div>

            <button
              style={{
                borderColor: "white",
              }}
              type="submit"
              class="btn btn-danger"
              id="btn-btn-primary"
              disabled={
                !age ||
                !sex ||
                !bloodpressure ||
                !cholesterol ||
                !diabetes ||
                !smoking
              }
            >
              SUBMIT
            </button>
            <div></div>
            <button
              style={{
                marginTop: 25,
                borderColor: "white",
              }}
              type="reset"
              class="btn btn-outline-danger"
              id="btn-btn-outline-primary"
              onClick={resetHandler}
            >
              RESET
            </button>
          </form>
        </div>

        <div
          style={{ marginTop: 40 }}
          className="d-flex justify-content-center"
        >
          <div class="card bg-light mb-3 " id="card-bg-light-mb-3">
            <div
              className="card-header text-center font-weight-bold"
              id="card-header-text-center-font-weight-bold"
              style={{ backgroundColor: resultBackColor }}
            >
              <p
                className="card-text text-center"
                id="card-text-text-center"
                style={{ color: resultColor }}
              >
                {output}
              </p>
            </div>
            {/* <div className="card-body" style={{minHeight:45, backgroundColor: '#D1F1E6'}}>

                        
                     </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
