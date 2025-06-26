import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./features/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>{" "}
      <button onClick={() => dispatch(decrement())}>-1</button>{" "}
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default App;
