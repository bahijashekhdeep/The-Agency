import React, { useState, Fragment } from "react";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/EditUsersForm";
import { Typography, Grid } from "@mui/material";

import axios from "axios";

const ViewAdmen = () => {
  const usersData = [
    {
      id: 1,
      name: "Nick",
      email: "nick@example.com",
      permissions: "Blog",
      password: "88888",
    },
    {
      id: 2,
      name: "Shane O.",
      email: "shane@example.com",
      permissions: "Blog",
      password: "88888",
    },
    {
      id: 3,
      name: "Shawna",
      email: "shawna@example.com",
      permissions: "Blog",
      password: "88888",
    },
    {
      id: 4,
      name: "Sheena, W.P.",
      email: "sheena@example.com",
      permissions: "Blog",
      password: "88888",
    },
  ];

  const initialFormState = {
    id: null,
    name: "",
    email: "",
    permissions: "",
    password: "",
  };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      permessions: user.permissions,
      password: user.password,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const handlePasswordChange = (name, email, newPassword) => {
    // Make API call to change password
    axios
      .post("https://example.com/api/change-password", {
        name: name,
        email: email,
        password: newPassword,
      })
      .then((response) => {
        if (response.status === 200) {
          // Handle successful password change
          // Update password in table using another API call or include it in this call.
          // Pass the updated user data to the updateUser function
          updateUser(currentUser.id, {
            ...currentUser,
            password: newPassword,
          });
        }
      })
      .catch((error) => {
        // Handle password change error
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Fragment>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
         
          </Fragment>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewAdmen;
