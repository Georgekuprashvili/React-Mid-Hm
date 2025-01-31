import { useRef, useState } from "react";
import "../__atoms/Card_params.css";

function CardHolder() {
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
      <div className="code_box">
        <div className="paragraph">CARDHOLDER NAME</div>
        <input
          className={`name ${error ? "input-error" : ""}`}
          type="text"
          placeholder="   e.g. Jane Appleseed"
          ref={inputRef}
          onBlur={validateName}
        />
        {error && <div className="error-message">{error}</div>}
      </div>
    </>
  );
}

export default CardHolder;
