import "../__atoms/Card_params.css";
import { useRef } from "react";
import { useState } from "react";

function Cardnumbers() {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  function validateName() {
    const name = inputRef.current.value;
    const regex = /^(0|[1-9]\d*)$/;
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
      <div className="code_box">
        <div className="paragraph">CARD NUMBER</div>
        <input
          className={`name ${error ? "input-error" : ""}`}
          type="number"
          placeholder="   e.g. 1234 5678 9123 0000"
          ref={inputRef}
          onBlur={validateName}
          
        />
        {error && <div className="error-message">{error}</div>}
      </div>
    </>
  );
}
export default Cardnumbers;
