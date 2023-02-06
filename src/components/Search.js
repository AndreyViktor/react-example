import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import GetStrings from "../utils/GetStringsUseCase"

function Search({ setSelectedString }) {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [strings, setStrings] = useState([""]);
    const [filteredStrings, setFilteredStrings] = useState(strings);
  
    useEffect(() => {
      setFilteredStrings(
        strings.filter(string =>
          string.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, strings]);

    useEffect(()=>{
        let stringList = GetStrings
        setStrings(stringList)
    })
  
    const handleSelectString = string => {
      setSelectedString(string);
      navigate("/home")
    };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredStrings.map(string => (
        <p key={string} onClick={() => handleSelectString(string)}>
          {string}
        </p>
      ))}
    </div>
  );
}

export default Search;