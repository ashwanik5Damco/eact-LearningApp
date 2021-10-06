import React, { Component } from "react";
import Modal from "../common/Modal";
import TableHeader from "../common/TableHeader";
import UserList from "../user/UserList";
import { useHistory } from "react-router-dom";
export default class Users extends Component {

  constructor(props) {
    // history = useHistory();
    super(props); //calling super class's constructor
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleDetails = this.handleDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      tableHeader: ["#", "User", "Email", "Name","Action"],
      users: [],
      editUserDetails: {},
      showModal : false
    };
  }

  render() {
    const {tableHeader,users,editUserDetails,showModal } = this.state;
    return (
      <>
        <h4>Active Users</h4>
        <table className="table">
          <TableHeader tableHeader={tableHeader}></TableHeader>

          <tbody>
            {users.map((user) => {
              return (
                <UserList
                  key={user.id}
                  user={user}
                  onDelete={this.handleDelete}
                  onEdit={this.handleEdit}
                  onDetails = {this.handleDetails}
                />
              );
            })}
          </tbody>
        </table>

        <Modal show={showModal} userDetails={editUserDetails} handleOnChange={this.handleOnChange} handleOnClose={this.closeModal} />
      </>
    );
  }

  componentDidMount = async () => {
    let response = await fetch("https://reqres.in/api/users", {
      method: "Get",
    });
    let users = await response.json();
    console.log(users);

    this.setState({ users: users.data });
    localStorage.setItem("userList", JSON.stringify(this.state.users))
  };

  handleDelete = (user) => {
    let allUsers = this.state.users;
    let index = allUsers.indexOf(user);
    if (window.confirm("Are you sure you want  to delete this user?")) {
      allUsers.splice(index, 1);
      this.setState({
        users: allUsers,
      });
      localStorage.setItem("userList", JSON.stringify(this.state.users))
    }
  };

  handleEdit = (user) => {
   
    this.setState({
      editUserDetails : user,
      showModal : true
    })
    console.log("data", this.state.showModal)
  };

  closeModal(){
    this.setState({
      showModal : false
    })
  }

  handleOnChange(data , id){
    let allUsers =JSON.parse(localStorage.getItem('userList'))  ;
    console.log("allUsers ", allUsers );
    allUsers.forEach((el)=>{
  if(el.id == id){
    el.first_name = data
  }
    })
    this.setState({
      users : allUsers,
    });
    localStorage.setItem("userList", JSON.stringify(this.state.users))
  }

  handleDetails(user , id){
    console.log("user",user , "  id ", id)
    // history.push("/UserDetails");
    this.props.history.push({ pathname : '/UserDetails', state : {userid: user.id} }
);
  }

}
