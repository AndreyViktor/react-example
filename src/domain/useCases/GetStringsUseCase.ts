import axios from "axios"
import { CitiesModel } from "../models/cities-list-model"

export default async function GetStrings(){
    const res = await axios.get<CitiesModel[]>("https://63dd2ca2367aa5a7a40a9f70.mockapi.io/study/v1/cities")

    return res.data
}