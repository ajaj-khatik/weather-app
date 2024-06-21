import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") {
      onSearch(city);
      setCity("");
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <input
        placeholder="Enter City Name"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-gray-500 rounded-3xl"
      />
      <button
        className="ml-2 p-2 bg-white text-black rounded-full h-11 w-11 flex items-center justify-center"
        onClick={handleSearch}
      >
        <TfiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
