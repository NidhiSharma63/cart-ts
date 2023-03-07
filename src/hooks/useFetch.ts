import { useEffect, useState ,useContext} from "react";
import { dataContext } from "../context/DataContext";
export const useFecth =  () =>{

  const {dataState,dispatch} = useContext(dataContext)

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) =>{
      setData(json)
      dispatch({type:"Get_Data",payload:json})
    });

  },[])

    return {data}
}