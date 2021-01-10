import React from "react";
import profile from "../../img/profile.svg";
function About() {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-around h-screen">
            <div className=" grid grid-cols-2 items-center ml-10  px-1 py-1 md:grid md:text-md sm:grid sm:text-sm ">
              <h1 className="text-center">About Us</h1>
              <div className="flex-col rounded-sm  items-center  mt-20 mr-20">
                <div className="flex justify-center items-center h-full ">
                  <img src={profile} alt="" className="w-50 md:w-30 sm:20" />
                </div>
              </div>
              <p className="text-sm text-white max-w-sm sm:text-sm">
                Cupidatat ex nostrud esse anim nulla enim ex qui. Velit tempor
                adipisicing aute amet incididunt incididunt aliqua dolor aute
                cupidatat. Ut eiusmod ad adipisicing ipsum nulla et aute esse
                culpa ex. Officia cillum labore dolor pariatur fugiat anim sit.
                Sit sit voluptate laborum dolore ex est. Occaecat do ex commodo
                id consequat aliqua aliqua. Sit est ullamco labore cillum
                nostrud cupidatat officia sint fugiat duis minim proident
                deserunt excepteur. Dolore voluptate magna sunt eu ad magna
                dolore ex incididunt mollit non ea. Ex sint consectetur
                adipisicing pariatur consequat et officia proident dolore mollit
                nostrud voluptate labore. Deserunt culpa esse reprehenderit ut.
                Quis pariatur magna voluptate nostrud laborum est consectetur
                pariatur duis cupidatat tempor id. Incididunt in occaecat esse
                eiusmod occaecat labore proident commodo sint id consequat.
              </p>
              <div className="flex justify-center mt-2">
                <button className="flex justify-center bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-2 border w-1/3 border-green-200 rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
