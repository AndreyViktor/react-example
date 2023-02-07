import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import GetStrings from "../domain/GetStringsUseCase"
import { CitiesModel } from "../domain/models/cities-list-model"
import "./Search.css"

function Search({ setSelectedString } : {setSelectedString:any}) {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    const [dataObj, setDataObj] = useState<CitiesModel[]>([])
    const [filteredStrings, setFilteredStrings] = useState<CitiesModel[]>(dataObj)
  
    useEffect(() => {
      setFilteredStrings(
        dataObj.filter(data =>
          data.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, dataObj])

    useEffect(()=>{
        const getStrings = async () => {
          const data = await GetStrings()
          setDataObj(data)
        }
        getStrings()
    },[])
  
    const onStringClicked = (name:string) => {
      setSelectedString(name)
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
      {filteredStrings.map(data => (
        <p className="Results" key={data.id} onClick={() => onStringClicked(data.name)}>
          {data.name}
        </p>
      ))}
    </div>
  );
}

export default Search