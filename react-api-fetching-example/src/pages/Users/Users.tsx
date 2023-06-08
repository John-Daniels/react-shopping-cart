import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Dashboard from "../../components/Dashboard/Dashboard";

const Users = () => {
  return (
    <div className="flex bg-customBg">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default Users;
