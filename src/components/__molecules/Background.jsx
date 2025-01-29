import "../__molecules/card.css";
import Cards from "./Cards";
import photo2 from "../../assets/Group 8 (2).svg";

function Background() {
  return (
    <>
      <div className="background">
        <div className="first_card">
          <div>
            <img src={photo2} />
          </div>
          <div className="card_number">0000 0000 0000 0000</div>
          <div className="name_box">
            <p className="name_p">JANE APPLESEED</p>
            <p className="month_p">00/00</p>
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
}
export default Background;
