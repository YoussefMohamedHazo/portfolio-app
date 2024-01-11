import JavaScript from "../assets/Certifications/IMG_7459.jpg";
import Html from "../assets/Certifications/Course_Certificate_En (1)_page-0001.jpg";
import Web from "../assets/Certifications/IMG_7460.jpg";

const Certifiection = () => {
  return (
    <div
      name="Certifications"
      className="w-full h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Certifications
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Gird Item */}

          <div
            style={{ backgroundImage: `url(${JavaScript})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            {/*  images */}
          </div>
          <div
            style={{ backgroundImage: `url(${Web})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Certifiection;
