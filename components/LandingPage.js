// import React from "react";
// import backgroundImg from '../images/background2.png'
// ;

// export default function LandingPage() {
//   return (
//     <div
//       className="bg-cover bg-center min-h-screen bg-no-repeat filter brightness-75"
//       style={{ backgroundImage: `url(${backgroundImg})` }}
//     >
//       <div className="container mx-auto px-4 py-16 filter brightness-100">
//         <header className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-white">URLUX</h1>
//           <nav>
//             <ul className="flex space-x-4">
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-gray-500">
//                   Illustrator
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-gray-500">
//                   3D Model
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         <main>
//           <section className="flex flex-col md:flex-row items-center justify-center py-16">
//             <div className="w-full md:w-1/2 text-center md:text-left">
//               <h2 className="text-4xl font-bold mb-4 text-white">
//                 Hello Dribbblers!
//               </h2>
//               <p className="text-gray-100 leading-loose">
//                 This is my first shot. I am very happy to land on this planet,
//                 thanks to Fahmi Majid for the invite!
//               </p>
//             </div>
//             <div className="w-full md:w-1/2 flex justify-center">
//               {/* Add an image here */}
//             </div>
//           </section>
//         </main>

//         <footer className="text-center text-gray-500 py-8">
//           <p>© 2024 URLUX</p>
//         </footer>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-500 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <main>
          <section className="flex flex-col md:flex-row items-center justify-center py-16">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-4">
                Hello Dribbblers!
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                This is my first shot. I am very happy to land on this planet,
                thanks to Fahmi Majid for the invite!
              </p>
              <div className="flex flex-wrap justify-center md:justify-start mt-8">
                <button className="bg-gray-800 hover:bg-gray-700 p-2 md:py-3 px-6 md:px-8 rounded text-white mb-4 md:mb-0 mr-4">
                  <Link to="/createprofile" className="text-white">
                    Create Profile
                  </Link>
                </button>
                {/* <button className="bg-gray-800 hover:bg-gray-700 p-2 md:py-3 px-6 md:px-8 rounded text-white">
                  <Link to="/whydribbble" className="text-white">
                    Why Dribbble?
                  </Link>
                </button> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://via.placeholder.com/400"
                alt="Illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-200 py-8">
          <p>© 2024 URLUX</p>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;