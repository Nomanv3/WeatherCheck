import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgSearch } from "react-icons/cg";
import Autosuggest from "react-autosuggest";
import Cards from "./Cards";
import Nav from "./Nav";

const Hero = () => {
    const [apidata, setApidata] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState("");
    const [data, setData] = useState(false);

    const fetchApi = async (query) => {
        const api = `https://api.weatherapi.com/v1/current.json?key=e24b6d594599447a80262309240306&q=${query}`;
        try {
            const response = await axios.get(api);
            setApidata(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchSuggestions = async (value) => {
        const api = `https://api.weatherapi.com/v1/search.json?key=e24b6d594599447a80262309240306&q=${value}`;
        try {
            const response = await axios.get(api);
            setSuggestions(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        fetchSuggestions(value);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const getSuggestionValue = (suggestion) => suggestion.name;

    const renderSuggestion = (suggestion) => (
        <div className="bg-blue-400 w-30 flex absolute">
            <div className="bg-blue-300 w-20" onClick={searcher}>
                {suggestion.name}
            </div>
        </div>
    );

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    };

    const inputProps = {
        placeholder: "Enter the city",
        value,
        onChange: onChange,
    };

    const searcher = () => {
        if (value.trim() !== "") {
            fetchApi(value);
        }
    };

    useEffect(() => {
        fetchApi("India"); // Fetch default data for India initially
    }, []);

    const getdata = (data) => {
        console.log("The state data is coming from Nav:", data);
        setData(data);
    };

    return (
        <div className={`h-screen w-full ${data ? "bg-blue-100" : "bg-zinc-600"} p-5`}>
            <Nav getdata={getdata} />

            <div className="bg-red-400 w-full flex items-center justify-center">
                <div className={`flex items-center justify-center w-full ${data ? "bg-blue-100" : "bg-zinc-600"}`}>
                    <div className="flex">
                        <Autosuggest
                            theme={{
                                input: "bg-white w-70 focus:outline-none rounded p-1 font-semibold",
                            }}
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        />
                        <CgSearch className="bg-white text-3xl rounded-sm" onClick={searcher} />
                    </div>
                </div>
            </div>

            <div className="h-[80vh] w-full p-10 flex gap-3 items-center justify-center">
                {apidata && <Cards weatherinfo={apidata} />}
            </div>
        </div>
    );
};

export default Hero;
