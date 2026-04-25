import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const plus = () => setCount((prev) => prev + 1);

  const minus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="container wrap-counter">
        <h1>
          <i class="fa-solid fa-cart-shopping"></i>
          <span className="counter-items">0</span> Items
        </h1>
        <div className="m-10">
          <i class="fa-solid fa-arrows-rotate"></i>
          <i class="fa-solid fa-recycle"></i>
        </div>
        <div>
          <span className="count">{count}</span>
          <button onClick={() => plus()} className="btn btn-start">
            +
          </button>
          <button onClick={() => minus()} className="btn btn-stop">
            -
          </button>
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
