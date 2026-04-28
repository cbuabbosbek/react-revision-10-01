import { useEffect, useState } from "react";

function CounterApp() {
  const [items, setItems] = useState(0);
  const [counters, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
  ]);

  const plus = (id) => {
    let newCounters = counters.map((c) => {
      if (c.id == id) {
        c.count++;
      }
      return c;
    });

    setCounters(newCounters);
  };

  const minus = (id) => {
    let newCounters = counters.map((c) => {
      if (c.id == id && c.count > 0) {
        c.count--;
      }
      return c;
    });

    setCounters(newCounters);
  };

  useEffect(() => {
    counters.forEach((c) => {
      if (c.count == 1) {
        setItems((prev) => prev + 1);
      }
    });
  }, [counters]);

  return (
    <>
      <div className="container wrap-counter">
        <h1>
          <i class="fa-solid fa-cart-shopping"></i>
          <span className="counter-items">{items}</span> Items
        </h1>
        <div className="m-10">
          <i class="fa-solid fa-arrows-rotate"></i>
          <i class="fa-solid fa-recycle"></i>
        </div>
        <div>
          {counters.map((c) => {
            return (
              <div key={c.id}>
                <span
                  className={`count btn  ${c.count == 0 ? "btn-warning" : "btn-info"}`}
                >
                  {c.count == 0 ? "Zero" : c.count}
                </span>
                <button onClick={() => plus(c.id)} className="btn btn-start">
                  +
                </button>
                <button onClick={() => minus(c.id)} className="btn btn-stop">
                  -
                </button>
                <i class="fa-solid fa-trash"></i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CounterApp;
