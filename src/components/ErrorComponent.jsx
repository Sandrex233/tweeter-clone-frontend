import React from "react";

const ErrorComponent = ({ error, setComponentToShow }) => {

  const handleButtonClick = () => {
    setComponentToShow("login")
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100  border-l-4 border-red-500 text-red-700 p-9">
        <div className="flex flex-col ">
          <div>
            <p className="text-xl font-bold mb-3">An error occurred</p>
            {error.response && (
              <p className="text-base">
                {error.message}
                <br />
                {error.response.data.message}
              </p>
            )}
          </div>
          <button onClick={handleButtonClick} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded">
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
