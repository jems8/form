import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";

const UserTable = () => {

  const {admins} = useSelector((state) => state.admins);
  console.log("thi is admin", admins);

  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "Active",
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = () => {
    const { firstName, lastName, email, phone, status } = formData;
    // if (!firstName || !lastName || !email || !phone || !status) {
    //   alert("Please fill in all fields.");
    //   return;
    // }

    setUsers([...users, formData]);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      status: "Active",
    });

    localStorage.setItem("users", JSON.stringify([...users, formData]));

    closeModal();
  };

  return (
    <div>
      <h2>User Table</h2>
      <button onClick={openModal}>Add Member</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Add Member</h3>
          </div>
        </div>
      )}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Joined Date</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.gendar}</TableCell>
                <TableCell>{user.experience}</TableCell>
                <TableCell>{user.joinedDate}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
