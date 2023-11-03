import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about us page in react project</h2>
      {/* <User
        name={"Abhay (function)"}
        location={"West Bengal"}
        git={`https://github.com/AbhayrajPaul`}
      /> */}
      <UserClass
        name={"Abhay (class)"}
        location={"West Bengal"}
        git={`https://github.com/AbhayrajPaul`}
      />
    </div>
  );
};

export default About;
