import {Base_Url} from "../Api/index"
import axios from "axios"
export async function getAllProducts(){
   let result
   result=await axios(Base_Url+"product").then((res)=>{
    return res.data
   })
   return result
}