import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import React, { useState } from "react";

export function CardWithLink({ image }) {
  const [selected, setSelected] = useState(false);

  const handleCardClick = () => {
    setSelected(!selected);
  };
  return (
    <Card
      className={`w-72 h-70 mt-6 bg-white shadow-md rounded-lg p-4 cursor-pointer ${
        selected ? "border-2 border-pink-500" : ""
      }`}
      onClick={handleCardClick}
    >
      <CardBody className="w-60 p-1">
        <img src={image} alt="" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography className="text-sm">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        {selected && (
          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 15.586L3.707 11.293a1 1 0 011.414-1.414L8 12.172l7.793-7.793a1 1 0 011.414 1.414L9.414 15.586a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
