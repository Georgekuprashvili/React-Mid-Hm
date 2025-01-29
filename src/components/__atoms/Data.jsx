import "../__atoms/Card_params.css";

function Data() {
  return (
    <>
      <div className="params_cont">
        <div className="code_box">
          <div>Exp. Date (MM/YY)</div>
          <div className="month_year_box">
            <input className="month" type="number" placeholder="MM" />
            <input className="month" type="number" placeholder="YY" />
          </div>
        </div>
        <div className="code_box">
          <div>CVC</div>
          <input className="cvc" type="number" placeholder="e.g. 123" />
        </div>
      </div>
    </>
  );
}
export default Data;
