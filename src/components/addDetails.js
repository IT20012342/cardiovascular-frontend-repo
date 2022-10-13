import React, { useState } from "react";
var bg = require("../bg1.jpg");

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
        setResultColor("blue");
        setOutput(
          "There is no risk of cardiovascular disease in the next ten years"
        );
      } else if (data === 1) {
        setResultColor("red");
        setOutput(
          "There is high risk of cardiovascular disease in the next ten years"
        );
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
      <div class="borderClass">
        <div
          className="d-flex justify-content-center"
          id="d-flex-justify-content-center"
        >
          <h1
            class="d-flex justify-content-center-h"
            id="d-flex-justify-content-center-h"
          >
            {" "}
            CARDIOVASCULAR RISK ASSESSMENT
          </h1>
        </div>

        <div class="form-group" className="d-flex justify-content-center">
          <form onSubmit={sendData}>
            <div class="form-group row">
              <label class="col-sm col-form-label">Age</label>
              <div class="col-sm text-center">
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label">Gender</label>
              <div class="col-sm">
                <div class="form-check form-check-inline">
                  <input
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
                  <label class="form-check-label">Male</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender"
                    value="2"
                    checked={sex === "2"}
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                  />
                  <label class="form-check-label">Female</label>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label">Blood Pressure</label>
              <div class="col-sm">
                <input
                  type="number"
                  class="form-control"
                  id="bloodPressure"
                  placeholder="mmHG"
                  value={bloodpressure}
                  onChange={(e) => {
                    setbloodpressure(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label">Cholesterol Level</label>
              <div class="col-sm">
                <input
                  type="number"
                  class="form-control"
                  id="cholesterolLevel"
                  placeholder="mg/dL"
                  onChange={(e) => {
                    setCholesterol(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label">Diabetes Patient</label>
              <div class="col-sm">
                <div class="form-check form-check-inline">
                  <input
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
                  <label class="form-check-label">Yes</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
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
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm col-form-label">Smoking</label>
              <div class="col-sm text-center">
                <select
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
                  <option value="1">Never</option>
                  <option value="2">Stopped Recently</option>
                  <option value="3">Occasionally</option>
                  <option value="4">Everday</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
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
              style={{ marginTop: 25 }}
              type="reset"
              class="btn btn-outline-primary"
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
            >
              <p className="card-text text-center" id="card-text-text-center">
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
