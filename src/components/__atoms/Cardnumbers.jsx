import "../__atoms/Card_params.css";

function Cardnumbers() {
  return (
    <>
      <div className="code_box">
        <div className="paragraph">Card Number</div>
        <input
          className="name"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          id=""
        />
      </div>
    </>
  );
}
export default Cardnumbers;
