import React from "react";
import service from '../../img/service.svg'
import scb from '../../img/scb.svg'
import about from '../../img/about.svg'
export default function Service() {
  const hadleService = (e) => {
    console.log("test");
  };
  const dataSevice = [
    {
      id: 1,
      desc: "Generous limits to get started",
      headText: "Free",
      price: 0,
        img: scb
    },
    {
      id: 2,
      desc: "Amazing Some Feature",
      headText: "Promotion",
      price: 5,
      img:about


    },
    {
      id: 3,
      desc: "Unlimited for Task",
      headText: "Promotion",
      price: 10,
      img:service

    },
  ];
  return (
    <>
      <div className=" bg-white h-screen">
        <h1 className="text-green-600 text-center text-2xl mt-20">Services</h1>
        <div className=" flex-nowrap grid grid-cols-3 grap-2 ">
          {dataSevice.map((data) => (
            <div
              key={data.id}
              onClick={hadleService}
              className=" flex-1 w-3/4 border-sm rounded-sm overflow-hidden shadow-xl mt-10 m-auto px-1 py-1"
            >
                <img src={data.img} alt={data.desc}/>
              <div className="text-green-600 text-1xl text-center">
                {data.desc}
              </div>
              <div className="text-center text-2xl">{data.headText}</div>
              <div className="text-center">${data.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
