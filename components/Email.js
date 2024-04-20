import React, { useContext } from "react";
import UserContext from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Email = () => {
  const { userData } = useContext(UserContext);

  // Use userData here or pass it down to child components as needed
  return (
    <div>
      {/* {userData && <p>Email: {userData.email}</p>} */}
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-500 text-6xl mb-4"
          />
          <p className="text-lg font-semibold mb-2">
            Email has been successfully verified!
          </p>
          <p className="text-sm text-gray-600">
            A Thank you message has been sent to
            <div className="font-bold">{userData.email}.</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Email;
