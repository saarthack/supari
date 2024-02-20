import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NewTask from '../pages/NewTask'
import Completed from '../pages/Completed'
import Accepted from '../pages/Accepted'
import Failed from '../pages/Failed'
import Review from '../pages/Review'
import { UserContext } from "../Context/Context";


const MainTask = () => {
    const newObj = useContext(UserContext)
    console.log(newObj)
  return (
    <div className="bg-red-900 p-5 pt-10 h-[55vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newtask" element={<NewTask />} />
        <Route path="/review" element={<Review />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/accepted" element={<Accepted />} />
        <Route path="/failed" element={<Failed />} />
      </Routes>
    </div>
  );
};

export default MainTask;
