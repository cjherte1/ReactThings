import "./MyButton.css";

function MyButton({ num, onClick }) {
  return (
    <button className="MyButton" onClick={onClick}>
      {num}
    </button>
  );
}

export default MyButton;
