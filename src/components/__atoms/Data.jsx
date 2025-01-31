import "../__atoms/Card_params.css";
import { useRef } from "react";
import { useState } from "react";

function Data() {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  function validateName() {
    const name = inputRef.current.value;
    const regex = /^[a-zA-Z ]{2,40}$/;
    if (name.trim() === "") {
      setError("Can’t be blank.");
      return;
    }
    if (!regex.test(name)) {
      setError("Wrong format, use only letters");
    }
  }

  return (
    <>
      <div className="params_cont">
        <div className="code_box">
          <div>EXP. DATE (MM/YY)</div>
          <div className="month_year_box">
            <input
              className={`month ${error ? "input-error" : ""}`}
              type="number"
              placeholder="   MM"
              ref={inputRef}
              onBlur={validateName}
            />
            <input
              className={`month ${error ? "input-error" : ""}`}
              type="number"
              placeholder="   YY"
              ref={inputRef}
              onBlur={validateName}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
        <div className="code_box">
          <div>CVC</div>
          <input
            className={`cvc ${error ? "input-error" : ""}`}
            type="number"
            placeholder="   e.g. 123"
            ref={inputRef}
            onBlur={validateName}
          />
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </>
  );
}
export default Data;
