import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class UserList extends Component {
 
  render() {
    const {user,onDelete,onEdit,onDetails} = this.props;


    
    return (
      <tr >
        <th scope="row">{user.id}</th>
        <td onclick="onDetails(user)">
          <img
            src={user.avatar}
            width="50"
            height="60"
            alt="user"
          />
        </td>
        <td>{user.email}</td>
        <td>{user.first_name}</td>
        <td>
          <span className="pull-left hand-icon">
          <Button variant="success" size="lg"  onClick={(event)=>{
              // event.preventDefault();
              onEdit(user);
            }}>
          Edit
        </Button>

        <Button variant="danger" size="lg" onClick={() => {
                  onDelete(user);
                }}>
          Delete
        </Button>

        <Button  variant="primary" size="lg" onClick={() => {
                  onDetails(user);
                }}>
          Details
        </Button>
          </span>
        </td>
      </tr>
    );
  }
}
