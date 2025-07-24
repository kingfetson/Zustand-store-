import useCounterStore from '../stores/useCounterStore';

function Counter() {
  const { count, increment, decrement, resetCount } = useCounterStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Zustand Counter</h1>

        <h1 className="text-3xl font-mono text-indigo-600 mb-4">{count}</h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            Increment
          </button>

          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            Decrement
          </button>

          <button
            onClick={resetCount}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;