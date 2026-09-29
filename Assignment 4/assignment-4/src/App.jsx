function App() {
  return (
    <div className="max-w-xl mx-auto my-8 border border-gray-200 rounded shadow-lg overflow-hidden">
      
      <div className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white flex justify-center items-center h-20 sm:h-28 lg:bg-green-500">
        <h1 className="text-2xl sm:text-4xl font-bold">
          TAILWIND CSS
        </h1>
      </div>

      <div className="p-4 sm:p-6 text-center">
        <h2 className="m-2 text-lg sm:text-xl font-semibold">
          Hello this is my tailwind Assignment.
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          This is a simple Assignment to demonstrate the use of Tailwind CSS for styling.
        </p>

        <form className="mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-1 p-2 bg-slate-200 rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
}

export default App;