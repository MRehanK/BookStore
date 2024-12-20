import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            These are the following courses we offer. Browse through a diverse range of topics and find the one that suits your interest. Expand your knowledge with our expertly crafted courses designed to ignite your curiosity and drive your growth.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {book.map((item, index) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Additional Courses and Books We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(28)].map((_, index) => (
              <div
                key={index}
                className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"
              >
                <figure>
                  <img
                    src="/Banner.png"
                    alt="Course or Book"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Course/Book {index + 1}
                    <div className="badge badge-secondary">New</div>
                  </h2>
                  <p>Explore this amazing course or book to enhance your skills and knowledge.</p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">$25</div>
                    <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                      Buy Now
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
