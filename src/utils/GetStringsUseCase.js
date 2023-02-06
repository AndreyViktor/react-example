import axios from "axios"

export default async function GetStrings(){
    const res = await axios.get("https://63dd2ca2367aa5a7a40a9f70.mockapi.io/study/v1/cities")

    let data = res.data

    let strings = data.map( obj =>(
        obj.name 
    )
    )

    console.log(strings)
    return strings
}