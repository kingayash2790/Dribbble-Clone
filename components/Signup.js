import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Email from "./Email";
import UserContext from "./UserContext";

function SignupPage() {

  const { setUserData } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [agreement, setAgreement] = useState(false); // Define agreement state
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    if (name === "email") {
      setEmail(value); // Update the email state when the email input changes
    }
  };

  const handleAgreementChange = (e) => {
    setAgreement(e.target.checked);
  };

  const signup = async () => {
    try {
      const { name, username, email, password } = user;
      if (name && username && email && password && agreement) {
        const response = await axios.post("http://localhost:9002/signup", user);
        if (response.status === 201) {
          // Assuming the server sends back a message like { message: 'User registered successfully.' }
          console.log(response.data); // Log the response data
          setUserData(response.data.user)
          alert("Registration Successful");
          navigate("/createprofile"); // Navigate to the next page
        } else {
          console.log("Unexpected response status:", response.status);
          alert("Registration Failed: Unexpected response status");
        }
      } else {
        alert("Invalid details");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error registering user:", error.response.data.error);
        alert("Registration Failed: " + error.response.data.error);
      } else {
        console.log("Error:", error.message);
        alert("Registration Failed: " + error.message);
      }
    }
  };

  return (
    <div className="signup-container flex text-black">
      {/* Left Half - Image (Hidden on Small Screens) */}
      <div className="signup-image hidden lg:flex items-center justify-center w-1/2">
        <img src="/images/signup2.png" alt="Signup" className="max-w-full" />
      </div>

      {/* Right Half - Form */}
      <div className="container mx-auto py-9 bg-gray-100 w-full lg:w-30">
        <p className="text-center text-gray-500 pr-3 lg:text-right">
          Already a member?{" "}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </p>
        <div className="flex flex-col justify-center items-center mt-3 px-4">
          <h1 className="text-3xl font-bold mb-4 lg:text-4xl lg: text-center">
            Sign up to Dribbble
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Discover the world's top Designers & Creatives.
          </p>

          <form className="w-full max-w-md pl-2 pr-2">
            <div className="flex flex-col space-y-4">
              <div className="name flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-4">
                <div className="flex flex-col w-30">
                  <label htmlFor="name" className="text-sm font-medium mr-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex flex-col w-30">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium mr-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                {/* Similarly add for other fields */}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mr-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="account@refero.design"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium mr-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="6+ characters"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={agreement}
                    onChange={handleAgreementChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="terms" className="mt-3 text-sm text-gray-600">
                    Creating an account means you're okay with our Terms of
                    Service, Privacy Policy, and our default Notification
                    Settings.
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="mx-auto w-60 py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-1 focus:ring-pink-500"
                onClick={signup}
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-8">
            <p className="text-gray-500 w-90">
              This site is protected by reCAPTCHA and the{" "}
              <span className="text-blue-600">Google Privacy Policy</span> and{" "}
              <span className="text-blue-600">Terms of Service Policy</span>{" "}
              apply{" "}
            </p>{" "}
            {/* Add your text */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
