import React from "react";
import { Link, NavLink } from "react-router-dom";

const Links = () => {
    return (
        <div className="no-scrollbar flex gap-3 p-4 flex-nowrap whitespace-nowrap overflow-x-auto w-full">
            <NavLink
                style={(e) => {
                    return {
                        backgroundColor: e.isActive ? "#0064D6" : "",
                    };
                }}
                className="px-3 bg-[#4e4e4e] text-sm font-bold py-1 rounded"
                to="/"
            >
                All
            </NavLink>
            <NavLink
                style={(e) => {
                    return {
                        backgroundColor: e.isActive ? "#0064D6" : "",
                    };
                }}
                className="px-3 bg-[#4e4e4e] text-sm font-bold py-1 rounded"
                to="/newtask"
            >
                New
            </NavLink>
            <NavLink
                style={(e) => {
                    return {
                        backgroundColor: e.isActive ? "#0064D6" : "",
                    };
                }}
                className="px-3 bg-[#4e4e4e] text-sm font-bold py-1 rounded"
                to="/review"
            >
                Review
            </NavLink>
            <NavLink
                style={(e) => {
                    return {
                        backgroundColor: e.isActive ? "#0064D6" : "",
                    };
                }}
                className="px-3 bg-[#4e4e4e] text-sm font-bold py-1 rounded"
                to="/accepted"
            >
                Accepted
            </NavLink>
            <NavLink
                style={(e) => {
                    return {
                        backgroundColor: e.isActive ? "#0064D6" : "",
                    };
                }}
                className="px-3 bg-[#4e4e4e] text-sm font-bold py-1 rounded"
                to="/completed"
            >
                Completed
            </NavLink>
            <NavLink
                style={(e) => {
                    return {
                        backgroundColor: e.isActive ? "#0064D6" : "",
                    };
                }}
                className="px-3 bg-[#4e4e4e] text-sm font-bold py-1 rounded"
                to="/failed"
            >
                Failed
            </NavLink>
        </div>
    );
};

export default Links;
