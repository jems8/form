import React from "react";
import UserTable from "../../Component/UserTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import CustomTable from "../../Component/CustomTable";

const ListUsersPage = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("create");
  };
  
  const bodyData = [
    { Name: "John", Age: 30, Grade:"A" , Gender:"Male"},
    { Name: "Jane", Age: 25, Grade:"B", Gender:"Female"},
  ];

  return (
    <div>
      
      This is list page.

      <CustomTable bodyData={bodyData}/>
      <Button onClick={handleCreateClick}>Add New </Button>
      <UserTable />

    </div>
  );
};

export default ListUsersPage;
