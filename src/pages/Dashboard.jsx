import React from 'react'
import { fetchData } from '../localStorage'
 import{useLoaderData} from "react-router-dom"
export const dashboardLoader=()=>{
  const userName=fetchData("userName")
  return {userName}
}

const Dashboard = () => {
const {userName}=useLoaderData()
  return (
    <>
      {userName?(<p>{userName}</p>):}
    </>
  )
}

export default Dashboard
