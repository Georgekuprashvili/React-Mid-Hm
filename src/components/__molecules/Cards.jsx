import "../__molecules/card.css";
import photo1 from "../../assets/Group 15.svg";

function Cards() {
  return (
    <>
      <div className="second_card">
        <div className="black_box"></div>
        <div className="cvv_box">
          000
        </div>
        <div>
          <img src={photo1} />
        </div>
      </div>
    </>
  );
}
export default Cards;
