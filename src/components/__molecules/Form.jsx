import "../__molecules/card.css";
import CardHolder from "../__atoms/Cardholder";
import Cardnumbers from "../__atoms/Cardnumbers";
import Data from "../__atoms/Data";
import Confirm from "../__atoms/Confirm";

function Form() {
  return (
    <>
      <form className="form">
        <CardHolder />
        <Cardnumbers />
        <Data />
        <Confirm />
      </form>
    </>
  );
}
export default Form;
