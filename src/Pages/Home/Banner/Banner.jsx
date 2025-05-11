import img1 from "../../../assets/dillon-kydd-2keCPb73aQY-unsplash.jpg";
import img2 from "../../../assets/towfiqu-barbhuiya-05XcCfTOzN4-unsplash.jpg";
import img3 from "../../../assets/towfiqu-barbhuiya-jpqyfK7GB4w-unsplash.jpg";
import img4 from "../../../assets/r-architecture-KQPEhYweLrQ-unsplash.jpg";
import img5 from "../../../assets/r-architecture-wJAOeXvxudM-unsplash.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[380px] md:h-[500px] lg:h-[580px] xl:h-[650px]">
        {/* skide 1 */}
      <div id="slide1" className="carousel-item relative w-full ">
 
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${img1})` }}
  ></div>
 
  <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-start px-12 text-center">
    <div className="text-white space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-7 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#39e439] to-[#66f899] bg-clip-text  px-0 lg:px-4 xl:px-28">
      Discover the space that matches your dreams and fits your lifestyle !
      </h2>
      <p className="text-gray-50  md:pt-3  xl:pt-4 text-xs md:text-sm lg:text-base xl:text-lg md:px-20 lg:px-28 xl:px-72 font-thin hidden md:flex">
      From cozy family homes to modern apartments and luxury villas, we bring you handpicked properties that align with your vision, comfort, and way of life. Begin your search today — your perfect space is just a click away.
      </p>
      <Link to="/allproperty">
        <button className="px-3 md:px-5 py-2 md:py-3 md:font-semibold rounded-lg bg-[#3BB77E] mt-6">Discover More</button>
      </Link>
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-2 md:right-5 bottom-0">
    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div>
{/* slide2 */}
        <div id="slide2" className="carousel-item relative w-full">
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${img2})` }}
  ></div>
 
  <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-start px-12 text-center">
    <div className="text-white space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-7 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#39e439] to-[#66f899] bg-clip-text  px-0 lg:px-4 xl:px-28">
      Find not just a property, but a place where your story begins !
      </h2>
      <p className="text-gray-50  md:pt-3  xl:pt-4 text-xs md:text-sm lg:text-base xl:text-lg md:px-20 lg:px-28 xl:px-72 font-thin hidden md:flex">
      We help you find more than a house — a true home. Whether you're starting fresh or upgrading your lifestyle, discover a space that reflects your personality, supports your goals, and becomes part of your journey.
      </p>
      <Link to="/allproperty">
        <button className="px-3 md:px-5 py-2 md:py-3 md:font-semibold rounded-lg bg-[#3BB77E] mt-6">Discover More</button>
      </Link>
    </div>
  </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${img3})` }}
  ></div>
 
  <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-start px-12 text-center">
    <div className="text-white space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-7 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#39e439] to-[#66f899] bg-clip-text  px-0 lg:px-4 xl:px-28">
      Connecting you with the right property, with trust at every step !
      </h2>
      <p className="text-gray-50  md:pt-3  xl:pt-4 text-xs md:text-sm lg:text-base xl:text-lg md:px-20 lg:px-28 xl:px-72 font-thin hidden md:flex">
      Whether you’re searching for your next home or your next opportunity, our curated properties offer beauty, functionality, and lasting worth. We help you make informed decisions for a better future, one property at a time.
      </p>
      <Link to="/allproperty">
        <button className="px-3 md:px-5 py-2 md:py-3 md:font-semibold rounded-lg bg-[#3BB77E] mt-6">Discover More</button>
      </Link>
    </div>
  </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${img4})` }}
  ></div>
 
  <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-start px-12 text-center">
    <div className="text-white space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-7 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#39e439] to-[#66f899] bg-clip-text  px-0 lg:px-4 xl:px-28">
      Your ideal lifestyle starts with the perfect location — find it here !
      </h2>
      <p className="text-gray-50  md:pt-3  xl:pt-4 text-xs md:text-sm lg:text-base xl:text-lg md:px-20 lg:px-28 xl:px-72 font-thin hidden md:flex">
      Location shapes your lifestyle. From energetic cityscapes to peaceful communities, we connect you with homes in places that inspire, support, and grow with you. Your dream destination is closer than you think — let’s find it together.
      </p>
      <Link to="/allproperty">
        <button className="px-3 md:px-5 py-2 md:py-3 md:font-semibold rounded-lg bg-[#3BB77E] mt-6">Discover More</button>
      </Link>
    </div>
  </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide 5 */}
        <div id="slide5" className="carousel-item relative w-full">
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${img5})` }}
  ></div>
 
  <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-start px-12 text-center">
    <div className="text-white space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-7 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#39e439] to-[#66f899] bg-clip-text  px-0 lg:px-4 xl:px-28">
      Step into a life of comfort, elegance, and timeless property value !
      </h2>
      <p className="text-gray-50  md:pt-3  xl:pt-4 text-xs md:text-sm lg:text-base xl:text-lg md:px-20 lg:px-28 xl:px-72 font-thin hidden md:flex">
      Luxury is more than looks — it’s about how a space makes you feel. Our properties combine elegant design, modern comfort, and long-term value to give you the home experience you truly deserve.
      </p>
      <Link to="/allproperty">
        <button className="px-3 md:px-5 py-2 md:py-3 md:font-semibold rounded-lg bg-[#3BB77E] mt-6">Discover More</button>
      </Link>
    </div>
  </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
