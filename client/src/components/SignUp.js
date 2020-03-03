import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
class Cloudinary extends React.Component {
  state = {
    loading: true,
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
      loading: false,
      profile_pic: file.secure_url
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", this.state)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1>username</h1>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="your uses name"
            onChange={this.handleChange}
          />
          <h1>password</h1>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="your password"
            onChange={this.handleChange}
          />
          <h1>location</h1>
          <input
            type="location"
            name="location"
            value={this.state.home_location}
            placeholder="your location"
            onChange={this.handleChange}
          />
          <h1>Upload Image</h1>
          <div style={{ height: "150px" }}>
            <input
              type="file"
              filename="image"
              placeholder="Upload an image"
              onChange={this.uploadImage}
            />
            {this.state.loading ? (
              ""
            ) : (
              <img src={this.state.profile_pic} style={{ width: "150px" }} />
            )}
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Cloudinary;
