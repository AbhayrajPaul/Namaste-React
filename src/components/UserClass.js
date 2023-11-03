import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // this.state = {
    //   followers: 0,
    //   following: 1,
    // };
    this.state = {
      userInfo: { name: "dummy", location: "default", git: "link" },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AbhayrajPaul");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    // const { name, location } = this.state;
    // const { name, location, git } = this.props; // destructuring
    // const { following } = this.state;
    const { login, html_url } = this.state.userInfo;
    console.log(this.state.userInfo);
    return (
      <div className="user-card">
        {/* <h2>Following : {this.state.following}</h2>
        <h2>Followers : {this.state.followers}</h2>
        <button
          onClick={() => {
            this.setState({
              followers: this.state.followers + 1,
            });
          }}
        >
          Follower increase
        </button> */}
        <h2>Name : {login}</h2>
        <h2>
          Git : <Link>{html_url}</Link>
        </h2>
      </div>
    );
  }
}

// a class-based is a class that extends React.Component that has a render () method which returns a piece of jsx
export default UserClass;
