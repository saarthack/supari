import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Links from './Components/Links'
import TaskData from './Components/TaskData'
import MainTask from './Components/MainTask'
import axios from 'axios'


const App = () => {

  const getData = async ()=>{
    const data = axios.get(`${import.meta.env.BASE_URL}./assets/supari.tasks.json`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
}
  return (
    <>
    <button onClick={getData}>Get Data</button>
    <Header />
    <TaskData />
    <Links />
    <MainTask />
    </>
  )
}

export default App