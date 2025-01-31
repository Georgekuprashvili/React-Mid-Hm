import arrow_image from "../../assets/Path (12).svg";
import "../__molecules/card.css";

function Thank_you_card() {
  return (
    <>
      <div className="thank_box">
        <div className="arrow_box">
          <img src={arrow_image} alt="" />
        </div>
        <div>
          <h1 className="thank_heading">THANK YOU!</h1>
          <p className="thank_paragraph">We’ve added your card details</p>
        </div>
        <button className="continue_button">Continue</button>
      </div>
    </>
  );
}
export default Thank_you_card;
