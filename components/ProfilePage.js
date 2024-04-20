import React, { useState } from "react";
import { CardWithLink } from "./Card";

export default function ProfilePage() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container w-full mx-auto px-4 py-16 bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        {step === 1 && (
          <div className="transition-transform duration-500 transform translate-x-0">
            <CreateProfile onNextStep={handleNextStep} />
          </div>
        )}
        {step === 2 && (
          <div className="transition-transform duration-500 transform -translate-x-full">
            <WhyThisPage onBack={handlePrevStep} />
          </div>
        )}
      </div>
    </div>
  );
}

function CreateProfile({ onNextStep }) {
  const [image, setImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setImageSelected(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="heading mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome! Let's create your profile
        </h1>
        <p className="text-gray-600 text-left">
          Let others get to know you better! You can do these later.
        </p>
      </div>

      <form>
        <div className="flex flex-col w-full space-y-4">
          <div className="flex items-center space-x-5">
            <div className="flex flex-col">
              <label htmlFor="avatar" className="text-xl font-bold mr-2 mb-4">
                Add an avatar
              </label>

              <div className="relative rounded-full w-36 h-36 mt-1 bg-white border-gray-500 border-dotted border-4 border-opacity-75 overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    className="w-full h-full rounded-full object-cover"
                    alt="Avatar"
                  />
                ) : (
                  <label
                    htmlFor="avatar"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4zM2 6a2 2 0 012-2h1.465a4 4 0 017.07 0H18a2 2 0 012 2v8a2 2 0 01-2 2h-1.465a4 4 0 01-7.07 0H4a2 2 0 01-2-2V6zm4 1a1 1 0 100 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                )}
              </div>
            </div>
            <div className="flex items-center w-full flex-col">
              <input
                onChange={handleFileChange}
                className="w-1/2"
                type="file"
                src="avatar"
                alt="avatar"
              />
              <p className="text-sm text-gray-500 pt-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 transform rotate-270"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.707 13.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
                    clipRule="evenodd"
                  />
                </svg>
                Or choose one of our defaults
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-5">
            <label htmlFor="location" className="text-xl font-bold mr-2">
              Add your location
            </label>
            <input
              type="text"
              id="location"
              className="px-3 py-2 mt-1 rounded-md border-b border-gray-500 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter a location"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onNextStep}
          className="w-1/2 py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 //focus:ring-pink-500 mt-14"
        >
          Next
        </button>
        {imageSelected && (
          <p className="text-gray-500 text-sm font-semibold mt-1 pl-20">
            Or press RETURN
          </p>
        )}
      </form>
    </div>
  );
}

function WhyThisPage({ onBack }) {
  return (
    <div className="max-w-md flex flex-col justify-center items-center space-y-4">
      <div className="flex items-center justify-between w-full">
        <button onClick={onBack} className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 transform rotate-90"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L11 10.586V4a1 1 0 112 0v6.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="w-full flex justify-center items-center max-h-screen">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-8 text-center">
            What brings you to Dribbble?
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
          <div className="w-full grid justify-center">
            <CardWithLink />
            <CardWithLink />
            <CardWithLink />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-8"
          >
            Finish
          </button>
        </div>
      </div>

      
    </div>
  );
}
