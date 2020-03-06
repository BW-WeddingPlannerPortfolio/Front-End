import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const H1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  padding: 1rem;
  width: 80%;
  background: #00a3ff;
  box-shadow: 0px 0px 24px rgba(0, 163, 255, 0.2);
  border-radius: 20px;
`;
const Button = styled.button`
  width: 55%;
  margin: auto;
  margin-left: 20%;
`;

class Cloudinary extends React.Component {
  state = {
    username: "",
    password: "",
    profile_pic: "",
    home_location: "",
    email: ""
  };

  uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "upload");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/takija/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      ...this.state,
      profile_pic: file.secure_url
    });
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", this.state)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "CURRENTUSER",
          JSON.stringify(res.data.newUser.planner)
        );
        history.push("/Profile");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <H1>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Your Username"
              onChange={this.handleChange}
            />
          </H1>
          <H1>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Your Password"
              onChange={this.handleChange}
            />
          </H1>
          <H1>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Your E-Mail"
              onChange={this.handleChange}
            />
          </H1>
          <H1>
            Location:
            <input
              type="location"
              name="home_location"
              value={this.state.home_location}
              placeholder="Your Location"
              onChange={this.handleChange}
            />
          </H1>
          <H1>
            Upload Image:
            <div>
              <input
                type="file"
                filename="image"
                placeholder="Upload An Image"
                onChange={this.uploadImage}
              />
              {
                <img
                  alt="profile "
                  src={this.state.profile_pic}
                  style={{ height: "50px" }}
                />
              }
            </div>
          </H1>

          <div>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Cloudinary);
