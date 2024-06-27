import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Nav = (props) => {
  const [dark, setDark] = useState(false);

  const setDarkMode = () => {
    setDark(true);
    props.getdata(true); // Pass the updated state directly
  };

  const setLight = () => {
    setDark(false);
    props.getdata(false); // Pass the updated state directly
  };

  return (
    <div className="w-full h-10 mb-5 rounded bg-red-400 flex items-center p-2 justify-between ">
        <h1>Logo</h1>
      {dark ? (
        <MdLightMode
          onClick={setLight}
          className="w-20 h-7 rounded-full color:white bg-white"
        />
      ) : (
        <MdDarkMode
          onClick={setDarkMode}
          className=" w-20 h-7  rounded-full bg-white"
        />
      )}
    </div>
  );
};

export default Nav;
