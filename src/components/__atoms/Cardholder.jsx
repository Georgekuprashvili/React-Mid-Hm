import "../__atoms/Card_params.css";

function CardHolder() {
  return (
    <>
      <div className="code_box">
        <div className="paragraph">Cardholder Name</div>
        <input
          className="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          id=""
        />
      </div>
    </>
  );
}
export default CardHolder;
