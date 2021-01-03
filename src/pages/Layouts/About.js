import React from "react";
import profile from "../../img/profile.svg";
function About() {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-around h-screen">
            <div className=" flex-col-reverse  w-full items-center ml-10 mt-20 px-1 py-1">
              <h1 className="text-center">About Us</h1>

              <p className="text-start py-3 px-4 text-white rounded-sm shadow-xl">
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
                eiusmod occaecat labore proident commodo sint id consequat. Eu
                id labore velit ut nulla cupidatat adipisicing pariatur sunt
                tempor sint. Occaecat proident deserunt reprehenderit duis
                consectetur fugiat eiusmod proident pariatur. Occaecat laborum
                consequat enim do et dolore magna sint magna in. Culpa qui magna
                elit eiusmod ipsum. Non laboris nulla minim anim fugiat
                incididunt anim mollit ullamco eiusmod velit sunt. Consectetur
                qui reprehenderit ullamco quis in aute Lorem dolor nostrud sint
                dolor. Ullamco laborum culpa dolore velit irure officia
                consectetur id labore. Velit quis dolore reprehenderit dolore ut
                amet incididunt eiusmod ullamco velit. Tempor mollit dolore id
                ad aute. Ad mollit pariatur et eiusmod aliquip. Ut adipisicing
                eu dolore velit exercitation non. Id deserunt esse nulla id
                voluptate sint proident laborum. Fugiat exercitation adipisicing
                fugiat deserunt aliquip magna do esse qui deserunt aliqua
                cillum. Amet labore nulla quis aute fugiat pariatur dolore
                aliquip incididunt minim aliquip deserunt labore aliqua. Eiusmod
                proident Lorem laborum eu ad eiusmod minim irure adipisicing
                duis eiusmod ex. Irure amet nisi esse sint irure id dolor
             
              </p>
              <div className="flex justify-center mt-2">
                <button className="flex justify-center bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-2 border w-1/3 border-green-200 rounded">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex-col rounded-sm  items-center  mt-20 mr-20">
              <div className="flex justify-center items-center h-full ">
                <img src={profile} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
