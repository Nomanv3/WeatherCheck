import React, { useEffect, useState } from "react";
import './Style.css'

const Cards = ({ weatherinfo, data }) => {
  const [locations, setLocation] = useState("");
  const [currents, setCurrent] = useState("");

  console.log(weatherinfo);

  useEffect(() => {
    if (weatherinfo) {
      if (weatherinfo.location) {
        setLocation(weatherinfo.location);
      }
      if (weatherinfo.current) {
        setCurrent(weatherinfo.current);
      }
    }
  }, [weatherinfo]);

  return (
    <div
      className={`${
        data ? "bg-zinc-100" : "bg-zinc-700 text-zinc-400"
      } w-full sm:w-[50%] md:w-50%] lg:w-[50%] xl:w-[40%] h-[60vh] rounded-3xl overflow-hidden flex flex-col       items-center gap-1 text-center p-4`}
    >
      <div
        className={`w-full h-12 ${
          data ? "bg-zinc-300" : "bg-zinc-500"
        } flex flex-wrap gap-1 items-center justify-center rounded-md p-1`}
      >
        <h1 className="city font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl gradient-text">
          {locations?.country}
        </h1>
        
        <h1 className={`state text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold ${data? "text-zinc-400":'text-zinc-300'} `}>
          {locations.region}
        </h1>
        <h1 className={`city text-lg sm:text-1xl md:text-2xl lg:text-3xl font-bold ${data? "text-zinc-400":'text-zinc-300'}`}>
          {locations?.name}
        </h1>
        <h1 className={`state text-sm sm:text-base md:text-lg lg:text-xl font-bold text-zinc-6 p-2`}>
          {locations?.localtime}
        </h1>
      </div>

      <div className="flex flex-col items-center px-8">
        <h2 className="Degree text-4xl sm:text-6xl md:text-9xl lg:text-6xl font-bold p-4">
          {currents?.temp_c}°
        </h2>
        <h1 className="text-2xl sm:text-5xl md:text-2xl lg:text-3xl font-bold flex justify-between items-center gap-8">
          {currents?.condition?.text}

          <div
            className={`${
              data ? "bg-zinc-700" : "bg-zinc-600"
            } p-2 relative rounded-full w-15`}
          >
            {currents?.condition?.icon && (
              <img src={currents.condition.icon} alt="logo " />
            )}
          </div>
        </h1>

        <div className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold w-full justify-between px-3">
          <div className="flex p-1 font-mono">
            <h2>Lat {locations?.lat}°</h2>.<h2>Lon {locations?.lon}°</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
