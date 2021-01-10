import React from "react";
import { Link } from "react-router-dom";
import Img2 from "../../img/ing.svg";
function Hero() {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-around h-screen">
            <div className="flex-col rounded shadow-sm max-w-sm items-center ml-10 mt-20 md:mt-0 px-1 py-1">
              <h1 className="text-center">Welcom Todo App</h1>

              <p className="text-start py-2 px-3 text-white">
                We have a lot of choices to help us keep track of daily
                obligations. A simple list on paper of things “To Do” is enough
                for some people. Others prefer to use programs. People have
                preferences about where they keep track of tasks - with PC
                utilities (“thick app”), websites (“thin app”), on phone
                (“mobile”) apps. Some software is very general, with nothing
                more than a simple list of task names and due dates.
              </p>
              <div className="flex justify-center ">
                <button className="flex justify-center bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-2 border w-1/3 border-green-200 rounded">
                  <Link to='/signin'>Get Start</Link>
                </button>
              </div>
            </div>
            <div className="flex-col rounded shadow-sm max-w-sm items-center  mt-20 mr-20">
              <div className="flex justify-center items-center h-full md:flex-col text-sm ">
                <img src={Img2} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
