import React from "react";
import { CardWithLink } from "./Card";
import { Link } from "react-router-dom";

export default function WhyThisPage() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center">
          What brings you to Dribbble?
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>

        <div className="flex flex-col gap-6 md:flex-row md:justify-center">
          <CardWithLink title="Option 1" image="images/dribbble_image1.png" />
          <CardWithLink title="Option 2" image="images/dribbbleimage2.png" />
          <CardWithLink title="Option 3" image="images/dribbbleimage3.png" />
        </div>

        <Link
          to="/emailverification"
          className="w-full max-w-md py-2 rounded-md bg-pink-500 text-white font-medium text-center hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-8"
        >
          Finish
        </Link>
      </div>
    </div>
  );
}
