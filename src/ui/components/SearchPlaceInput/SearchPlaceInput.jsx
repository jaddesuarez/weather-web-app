import { useState, useRef, useEffect } from "react";
import { nominatimService } from "@services/nominatim.service";
import PropTypes from "prop-types";

export const SearchPlaceInput = ({ onLocationSelect, setCurrCity }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchLocation = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const res = await nominatimService.getCoordinates(query);
      setSuggestions(res);
    } catch (err) {
      console.error("Error fetching locations:", err);
      setSuggestions([]);
    }
    setIsLoading(false);
  };

  const handleInputSearch = () => {
    if (search.length >= 3) {
      searchLocation(search);
    }
  };

  const handleSelectLocation = (location) => {
    const nameArr = location.display_name.split(",");
    const displayName = nameArr[0] + " - " + nameArr[nameArr.length - 1];
    const cityName = nameArr[0];
    setSearch(cityName);
    setSuggestions([]);
    setCurrCity(displayName);
    onLocationSelect({
      lat: parseFloat(location.lat),
      lng: parseFloat(location.lon),
    });
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        {/* Search Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 pr-10 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
        />
        {isLoading ? (
          <div className="absolute right-3 top-3">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          </div>
        ) : (
          <div
            className="absolute right-3 top-2.5 text-white/60 cursor-pointer hover:text-white/80 transition-all duration-300"
            onClick={handleInputSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Dropdown */}
      {suggestions?.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg max-h-60 overflow-auto">
          {suggestions.map((location) => {
            const nameArr = location.display_name.split(",");
            const displayName =
              nameArr[0] +
              ", " +
              nameArr[1] +
              " - " +
              nameArr[nameArr.length - 1];
            return (
              <li
                key={location.place_id}
                onClick={() => handleSelectLocation(location)}
                className="px-4 py-2 hover:bg-white/20 cursor-pointer text-white border-b border-white/10 last:border-none"
              >
                {displayName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

SearchPlaceInput.propTypes = {
  onLocationSelect: PropTypes.func.isRequired,
  setCurrCity: PropTypes.func.isRequired,
};
