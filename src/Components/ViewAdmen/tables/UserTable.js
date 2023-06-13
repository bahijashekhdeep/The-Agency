import React from "react";
import "./Table.css";
import EditIcon from "./Vector (18).png";
import DeleteIcon from "./Vector (19).png";

const UserTable = (props) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Permissions</th>
        <th>Password</th>
        <th className="actions"></th>
      </tr>
    </thead>
    <tbody>
      {props.users.map((user) => {
        const permissions = user.permissions.split(",");
        if (permissions.length > 1) {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select value={permissions[0]}>
                  {permissions.map((permission, index) => (
                    <option key={index} value={permission}>
                      {permission}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                {user.password.split("").map(() => (
                  <span className="password-mask">&#9679;</span>
                ))}
              </td>
              <td className="actions">
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="btn "
                >
                  <img src={EditIcon} alt="edit" />
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="btn"
                >
                  <img src={DeleteIcon} alt="delete" />
                </button>
              </td>
            </tr>
          );
        } else {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.permissions}</td>
              <td>
                {user.password.split("").map(() => (
                  <span className="password-mask">&#9679;</span>
                ))}
              </td>
              <td className="actions">
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="btn "
                >
                  <img src={EditIcon} alt="edit" />
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="btn"
                >
                  <img src={DeleteIcon} alt="delete" />
                </button>
              </td>
            </tr>
          );
        }
      })}
    </tbody>
  </table>
);

export default UserTable;
