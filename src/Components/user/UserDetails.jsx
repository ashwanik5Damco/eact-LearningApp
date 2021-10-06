import React, { Component } from "react";

export class UserDetails extends Component {
  constructor(props) {
    super(props); //calling super class's constructor

    this.state = {
      user: {},
      support : {}
    };
  }

  render() {
    const {user , support} = this.state;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={user.avatar}
          alt="user"
        />
        <div className="card-body">
          <h5 className="card-title">{user.first_name}  {user.last_name}</h5>
          <p className="card-text">{user.email}</p>
        </div>
        <div>
          <p className="card-text">{support.text}</p>
        </div>
        <div>
          <a className="card-text" href="#">{support.url}</a>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    var login = this.props.history.location.state?.userid;
    

    //send get request
    var response = await fetch(`https://reqres.in/api/users/${login}`, {
      method: "GET",
    });

    //get response body
    var body = await response.json();
    console.log(body);

    //Check response body
    if (body) {
      this.setState({ user: body.data , support : body.support });
    }
  };
}

export default UserDetails;
