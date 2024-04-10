function Keypad({ onButton, Answer, ClrScr }) {
  return (
    <div className="kaeypad">
      <div className="row">
        <button
          className="keys"
          onClick={() => {
            onButton("7");
          }}
        >
          7
        </button>
        <button
          className="keys"
          onClick={() => {
            onButton("8");
          }}
        >
          8
        </button>
        <button
          className="keys"
          onClick={() => {
            onButton("9");
          }}
        >
          9
        </button>
        <button
          className="operator"
          onClick={() => {
            onButton("+");
          }}
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          className="keys"
          onClick={() => {
            onButton("4");
          }}
        >
          4
        </button>
        <button
          className="keys"
          onClick={() => {
            onButton("5");
          }}
        >
          5
        </button>
        <button
          className="keys"
          onClick={() => {
            onButton("6");
          }}
        >
          6
        </button>
        <button
          className="operator"
          onClick={() => {
            onButton("-");
          }}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          className="keys"
          onClick={() => {
            onButton("1");
          }}
        >
          1
        </button>
        <button
          className="keys"
          onClick={() => {
            onButton("2");
          }}
        >
          2
        </button>
        <button
          className="keys"
          onClick={() => {
            onButton("3");
          }}
        >
          3
        </button>
        <button
          className="operator"
          onClick={() => {
            onButton("*");
          }}
        >
          *
        </button>
      </div>
      <div className="row">
        <button
          className="fun-key"
          onClick={() => {
            ClrScr("");
          }}
        >
          C
        </button>
        <button
          className="fun-key"
          onClick={() => {
            Answer();
          }}
        >
          =
        </button>
        <button
          className="keys"
          onClick={() => {
            onButton("0");
          }}
        >
          0
        </button>

        <button
          className="operator"
          onClick={() => {
            onButton("/");
          }}
        >
          /
        </button>
      </div>
    </div>
  );
}
export default Keypad;
