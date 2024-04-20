import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProfile() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [imageSelected, setImageSelected] = useState(false);

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      console.log(image);
      // Send image and location data to the backend
      const formData = new FormData();
      formData.append("image", image); // Append the image data to the form data
      formData.append("location", location); // Append the location to the form data

      // Send the form data to the backend using Axios
      const response = await axios.post(
        "http://localhost:9002/createprofile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for FormData
          },
        }
      );

      console.log(response.data); // Log the response from the backend
      alert("Profile data saved successfully");
      navigate("/whydribbble"); // Navigate to the next page
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile data");
    }
  };
  
  // const handleNext = () => {
  //   // Navigate to "/whydribbble" when Next button is clicked
  //   navigate("/whydribbble");
  // };

  return (
    <div className="container mx-auto py-16 px-4 bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          Welcome! Let's create your profile
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Let others get to know you better! You can do these later.
        </p>

        <form className="w-full max-w-md">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-5">
              <div className="flex flex-col w-full">
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
                  className="w-full"
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

            <div className="flex flex-col">
              <label htmlFor="location" className="text-xl font-bold mr-2">
                Add your location
              </label>
              <input
                type="text"
                id="location"
                className="px-3 py-2 mt-1 rounded-md border-b border-gray-500 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter a location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-14"
            onClick={handleSubmit}
          >
            Next
          </button>
          {imageSelected && (
            <p className="text-gray-500 text-sm font-semibold mt-1 text-center">
              Or press RETURN
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function CreateProfile() {
//   const [profile, setProfile] = useState({
//     avatar: null,
//     location: "",
//   });
//   const [imageSelected, setImageSelected] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({
//       ...profile,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setProfile({
//         ...profile,
//         avatar: file,
//       });
//       setImageSelected(true);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleNext = () => {
//     saveProfile();
//     // Navigate to "/whydribbble" when Next button is clicked
//     navigate("/whydribbble");
//   };

//   // Function to send profile data to the server
//   const saveProfile = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("avatar", profile.avatar);
//       formData.append("location", profile.location);

//       const response = await fetch("/api/upload-avatar", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Profile saved successfully");
//       } else {
//         console.error("Failed to save profile");
//       }
//     } catch (error) {
//       console.error("Error saving profile:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-16 px-4 bg-gray-100">
//       <div className="flex flex-col items-center">
//         <h1 className="text-4xl font-bold mb-8 text-center">
//           Welcome! Let's create your profile
//         </h1>
//         <p className="text-gray-600 text-center mb-12">
//           Let others get to know you better! You can do these later.
//         </p>

//         <form className="w-full max-w-md">
//           <div className="flex flex-col space-y-4">
//             <div className="flex items-center space-x-5">
//               <div className="flex flex-col w-full">
//                 <label htmlFor="avatar" className="text-xl font-bold mr-2 mb-4">
//                   Add an avatar
//                 </label>

//                 <div className="relative rounded-full w-36 h-36 mt-1 bg-white border-gray-500 border-dotted border-4 border-opacity-75 overflow-hidden">
//                   {profile.avatar ? (
//                     <img
//                       src={URL.createObjectURL(profile.avatar)}
//                       className="w-full h-full rounded-full object-cover"
//                       alt="Avatar"
//                     />
//                   ) : (
//                     <label
//                       htmlFor="avatar"
//                       className="absolute inset-0 flex items-center justify-center"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-10 w-10"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10 12a2 2 0 100-4 2 2 0 000 4zM2 6a2 2 0 012-2h1.465a4 4 0 017.07 0H18a2 2 0 012 2v8a2 2 0 01-2 2h-1.465a4 4 0 01-7.07 0H4a2 2 0 01-2-2V6zm4 1a1 1 0 100 2h8a1 1 0 100-2H6z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </label>
//                   )}
//                 </div>
//               </div>
//               <div className="flex items-center w-full flex-col">
//                 <input
//                   onChange={handleFileChange}
//                   className="w-full"
//                   type="file"
//                   id="avatar"
//                   name="avatar"
//                   accept="image/*"
//                 />
//                 <p className="text-sm text-gray-500 pt-1 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-2 transform rotate-270"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M8.707 13.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Or choose one of our defaults
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="location" className="text-xl font-bold mr-2">
//                 Add your location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={profile.location}
//                 onChange={handleChange}
//                 className="px-3 py-2 mt-1 rounded-md border-b border-gray-500 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 placeholder="Enter a location"
//               />
//             </div>
//           </div>
//           <button
//             type="button"
//             className="w-full py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-14"
//             onClick={handleNext}
//           >
//             Next
//           </button>
//           {imageSelected && (
//             <p className="text-gray-500 text-sm font-semibold mt-1 text-center">
//               Or press RETURN
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }
