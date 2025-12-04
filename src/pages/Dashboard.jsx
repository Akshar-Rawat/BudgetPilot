import React from 'react'
import Intro from "../components/Intro";
import { fetchData } from '../localStorage'
 import{useLoaderData} from "react-router-dom"
export const dashboardLoader=()=>{
  const userName=fetchData("userName")
  return {userName}
}

export async function dashboardAction({request}) {
 
  const data=await request.formData()
  const formData=Object.fromEntries(data)
 try {
   localStorage.setItem("userName",JSON.stringify(formData.userName))
  
 } catch (error) {
  throw new Error("There was an error while creating your account ");
  
 }
}

const Dashboard = () => {
const {userName}=useLoaderData()
  return (
    <>
      {userName?(<p>{userName}</p>):<Intro/>}
    </>
  )
}

export default Dashboard
