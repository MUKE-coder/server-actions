import React, { FC } from "react";

type UserProps = {
  username: string;
  age: number;
  course: string;
};
const User: FC<UserProps> = ({ username, age, course }) => {
  return (
    <div>
      <h2>Username: {username}</h2>
      <p>Age:{age}</p>
      <p>Course:{course}</p>
    </div>
  );
};

export default User;
