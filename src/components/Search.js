import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import GetStrings from "../utils/GetStringsUseCase"

import "./Search.css"

function Search({ setSelectedString }) {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    const [strings, setStrings] = useState([""])
    const [filteredStrings, setFilteredStrings] = useState(strings)
  
    useEffect(() => {
      setFilteredStrings(
        strings.filter(string =>
          string.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, strings])

    useEffect(function(){
        const getStrings = async () => {
          const data = await GetStrings()
          console.log(data)
          setStrings(data)
        }
        getStrings()

    },[])
  
    const onStringClicked = string => {
      setSelectedString(string)
      navigate("/home")
    }

  return (
    <div className="Search">
      <input
        className="SearchBar"
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredStrings.map(string => (
        <p className="Results" key={string} onClick={() => onStringClicked(string)}>
          {string}
        </p>
      ))}
    </div>
  );
}

export default Search