import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectValue } from "@/slices/counterSlice";

export default function Home() {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>The value of counter is {count}</h1>

      <button
        onClick={() => dispatch(increment())}
        className="w-full h-10 bg-green-400/50"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="w-full h-10 bg-red-400/50"
      >
        -
      </button>
    </main>
  );
}
