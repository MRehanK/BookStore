import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            Welcome to your one-stop destination for exploring new knowledge every day! 
            Dive into our wide range of courses designed to inspire creativity, enhance 
            skills, and spark curiosity. Whether you're looking to pick up a new hobby 
            or advance your career, we’ve got you covered with engaging content and expert guidance.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>

      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Discover a variety of free courses designed to fuel your passion for learning and personal 
            growth. Whether you're interested in exploring creative arts, mastering new technologies, 
            or diving into professional development, our free offerings provide high-quality content to 
            get you started on your journey. Enroll today and unlock your potential without any cost!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img src={banner} alt="Book" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Book {index + 1}
                  <div className="badge badge-secondary">Free</div>
                </h2>
                <p>Learn more about this amazing free course.</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">$0</div>
                  <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Banner;
