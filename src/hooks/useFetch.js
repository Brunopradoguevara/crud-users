import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
  
    const [infoApi, setInfoApi] = useState()

    //RED
    const getApi = (path)=>{
     const url = `${baseUrl}${path}/`
      axios.get(url)
       .then(res => {
        console.log(res.data)
        setInfoApi(res.data)})
       .catch(err => console.log(err))
    }

    //CREATE
    const postApi = (path,data)=>{
     const url = `${baseUrl}${path}/`
     axios.post(url,data)
     .then(res => {
        console.log(res.data)
        setInfoApi([...infoApi,res.data])})
     .catch(err => console.log(err))
    }

    //DELETE
    const deleteApi = (path,id)=>{
     const url = `${baseUrl}${path}/${id}/`
     axios.delete(url,id)
      .then(res => setInfoApi(infoApi.filter(e => e.id !== id)))
      .catch(err => console.log(err))
     
    }

    //UPDATE
    const updateApi = (path,id,data)=>{
     const url = `${baseUrl}${path}/${id}/`
     axios.put(url,data)
      .then(res => setInfoApi(infoApi.map(e => e.id === id ? res.data : e)))
      .catch(err => console.log(err))
    }

    return [infoApi,getApi,postApi,deleteApi,updateApi]
}

export default useFetch