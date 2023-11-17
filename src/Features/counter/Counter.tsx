import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "./counterSlice";
import { RootState } from "../../RootState";
const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Counter App</h1>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(increament())}
            className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            +
          </button>
          <p>{count}</p>

          <button
            onClick={() => dispatch(decreament())}
            className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            -
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
