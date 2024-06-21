import React, { useEffect, useState } from "react";

const Cards = ({ weatherinfo }) => {

  // const [weather , setweather] = useState([]);
  const [locations , setlocation]= useState(" ")
  const [currents , setcurrent]=useState('')

  // var condition = weatherinfo.current.condition
  // console.log(condition)
  //  let val = weatherinfo.current.condition.text;
  //  console.log(val)
  
  //  let index = weatherinfo.current.condition[2]
  //  console.log(index)
  
//  console.log(weatherinfo)
   
  useEffect(()=>{
    
    if(weatherinfo){
      if(weatherinfo.location){
        setlocation(weatherinfo.location)
      }
      if(weatherinfo.current){
        setcurrent(weatherinfo.current)
      }
    }

  } , [weatherinfo])


  // console.log(locations)
  // console.log(locations.country)
// console.log(current.condition.icon)
  // let location = weatherinfo.location;
  // setlocation(location) 
  // console.log(location)

  // location.map((item , index)=>{
  //   console.log(item)
  // })
  
  // console.log(weather)


 

  return (
    <div className="bg-red-200 w-[40%] h-[54vh] rounded-md overflow-hidden flex flex-col text-align-center">
      <div className="w-full h-14  bg-red-400 flex gap-2 items-center p-2">
        <h1 className="city font-extrabold text-3xl text-white">{locations?.country}</h1>,
        <h1 className="state text-3xl font-extrabold text-white">{locations.region}</h1>
        <h1 className="state text-xl font-bold text-white p-2">{locations?.localtime}</h1>
      </div>
      <div className="flex flex-col item-center px-3">
        <h2 className="Degree text-6xl font-bold p-4">32°</h2>
        <h1 className="text-3xl">{currents?.condition?.text}</h1>
        <div className="flex text-3xl font-bold w-full justify-between px-3 ">
          <div>
            <h2>Lat {locations?.lat}°</h2>.<h2>lat {locations?.lat}°</h2>
          </div>
          <div>
            {/* <h1>{current.condition.icon}</h1> */}
            {
              currents?.condition?.icon && (

                <img src={currents.condition.icon} alt="logo " />
              )
            }
          </div>
        </div>
      </div>
      {/* <h1>lat : {locations.lat}</h1> */}
      {/* <h1>lat : {locations.lon}</h1> */}
    </div>
  );
};

export default Cards;
