import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NewTask from '../pages/NewTask'
import Completed from '../pages/Completed'
import Accepted from '../pages/Accepted'
import Failed from '../pages/Failed'
import Review from '../pages/Review'
import { UserContext } from "../Context/Context";
import CreateTask from "../pages/CreateTask";
import CreateMember from "../pages/CreateMember";


const MainTask = () => {
    const newObj = useContext(UserContext)
  return (
    <div className="pt-10 pb-8 overflow-y-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newtask" element={<NewTask />} />
        <Route path="/review" element={<Review />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/accepted" element={<Accepted />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/createMember" element={<CreateMember />} />
      </Routes>
    </div>
  );
};

export default MainTask;
