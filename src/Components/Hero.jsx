import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import Cards from "./Cards";

const Hero = () => {
  const [apidata, setapidata] = useState([]);
  const [search , setsearch] = useState('')




   
   //   console.log(api.name)
   
   const fetchapi = async (query) => {
    let api =
      `https://api.weatherapi.com/v1/current.json?key=e24b6d594599447a80262309240306&q=${query}`;
    try {
      const response = await axios.get(api);
      setapidata(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const searcher = () =>{
    // console.log("hello noman")
    // let city = search;
    // console.log(city)
   
   
    // console.log(filtered)
    // console.log(search);

    if(search.trim() !== ''){
      fetchapi(search);
    }
   }

  useEffect(() => {
    fetchapi("India");
  }, []);

  
  // console.log(apidata.map((item)=>))
  // apidata.current.map((item)=>(
  //   console.log(item  )
  // ))
  console.log(search)

 
  // console.log(apidata)
//   console.log(apidata.Lo)
  // console.log(apidata.Location.current.condition.text)
//   console.log( apidata.location.region)
//   console.log( apidata.location.country)
//   console.log( apidata.current.condition.icon)
//   console.log(apidata && apidata.current.temp_c)

  return (
    <div className="h-screen w-full bg-blue-100 p-5 ">
      {/* <h1>hey noman how are you</h1> */}
      <div className="bg-red-400 w-full flex items-center justify-center ">
        <div className="h-50 rounded-xl flex items-center  justify-center w-[25%] bg-white overflow-hidden">
          <input
            placeholder="Enter the city
            "
            className="focus-none px-1 w-full bg-white py-2 rounded-y-xl text-50 font-medium outline-none"
            name="weathercheck"
            value={search}
            onChange={(e)=>setsearch(e.target.value)}

          />
          <span className="text-2xl p-2 bg-white ">
            <CgSearch onClick={searcher} />
          </span>
        </div>
      </div>
      <div className="h-[80vh] w-full p-10 flex gap-3 items-center justify-center">
      <Cards weatherinfo={apidata}/>
      {/* <Cards weatherinfo={apidata}/> */}
      {/* <Cards weatherinfo={apidata}/> */}
      {/* <Cards weatherinfo={apidata}/> */}

      </div>
    </div>
  );
};

export default Hero;
